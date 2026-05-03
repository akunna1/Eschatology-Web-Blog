"use client";

import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  arrayUnion,
  arrayRemove,
  Timestamp,
  getDoc
} from "firebase/firestore";
import { db, auth } from '@/lib/firebase/config';
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaThumbsUpSolid, LiaThumbsDownSolid } from "react-icons/lia";
import { MdOutlineInsertComment } from "react-icons/md";

// Defining the Post type for type safety
interface Post {
  id: string;
  title: string;
  text: string;
  author: { id: string; name: string };
  createdAt: { seconds: number; nanoseconds: number };
  likes: string[];
  dislikes: string[];
  comments: { id: string; text: string; author: string; createdAt: { seconds: number; nanoseconds: number } }[]; // Comments on the post
}

export default function Entries() {
  // State variables
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [commentText, setCommentText] = useState("");
  const [activeComments, setActiveComments] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Fetch posts from Firestore on initial render and listen for real-time changes
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        likes: doc.data().likes || [],
        dislikes: doc.data().dislikes || [],
        comments: doc.data().comments || [],
      } as Post)));
    });
    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  // Handling form submission for creating/updating posts
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (editingPost) {
      // Updating existing post
      await updateDoc(doc(db, "posts", editingPost.id), { title, text });
      setSuccessMessage("Entry amended successfully!");
      setEditingPost(null);
    } else {
      // Creating new post
      await addDoc(collection(db, "posts"), {
        title,
        text,
        author: { id: auth.currentUser?.uid, name: auth.currentUser?.displayName || "Anonymous" },
        createdAt: Timestamp.now(),
        likes: [],
        dislikes: [],
        comments: [],
      });
      setSuccessMessage("Entry published successfully!");
    }
    setTitle("");
    setText("");
    setTimeout(() => setSuccessMessage(null), 4000); // Hiding success message after 4 seconds
  };

  // Handling editing a post
  const handleEdit = (post: Post) => {
    setEditingPost(post); 
    setTitle(post.title);
    setText(post.text);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolling to top for editing
  };

  // Handling deleting a post
  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
  };

  // Handling liking a post
  const handleLike = async (post: Post) => {
    const userId = auth.currentUser?.uid;
    if (!userId) return; // If user is not authenticated, do nothing

    const postRef = doc(db, "posts", post.id);
    if (post.dislikes.includes(userId)) {
      await updateDoc(postRef, {
        dislikes: arrayRemove(userId), // Removing dislike if user is switching to like
      });
    }
    await updateDoc(postRef, {
      likes: post.likes.includes(userId)
        ? arrayRemove(userId) // Removing like if already liked
        : arrayUnion(userId), // Adding like if not already liked
    });
  };

  // Handling disliking a post
  const handleDislike = async (post: Post) => {
    const userId = auth.currentUser?.uid;
    if (!userId) return;

    const postRef = doc(db, "posts", post.id);
    if (post.likes.includes(userId)) {
      await updateDoc(postRef, {
        likes: arrayRemove(userId), // Removing like if user is switching to dislike
      });
    }
    await updateDoc(postRef, {
      dislikes: post.dislikes.includes(userId)
        ? arrayRemove(userId) // Removing dislike if already disliked
        : arrayUnion(userId), // Adding dislike if not already disliked
    });
  };

  // Handling submitting a comment
  const handleCommentSubmit = async (postId: string) => {
    if (!commentText.trim()) return; // Don't submit if comment is empty

    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      comments: arrayUnion({
        id: new Date().toISOString(), // Unique ID for the comment
        text: commentText,
        author: auth.currentUser?.displayName || "Anonymous",
        createdAt: Timestamp.now(),
      }),
    });

    setCommentText(""); // Clearing comment input field
  };

  // Handling deleting a comment
  const handleCommentDelete = async (postId: string, commentId: string) => {
    const postRef = doc(db, "posts", postId);
    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      const post = postSnapshot.data();
      const comments = post?.comments || [];

      const updatedComments = comments.filter((comment: any) => comment.id !== commentId);
      await updateDoc(postRef, {
        comments: updatedComments, // Removing the comment from the post
      });
    } else {
      console.log("Post not found"); // Logging error if post not found
    }
  };

  // Toggling the visibility of the comments section for a post
  const toggleComments = (postId: string) => {
    setActiveComments((prev) => (prev === postId ? null : postId)); // Toggling between showing and hiding comments
  };

  // Toggling the visibility of the options (edit/delete) menu for a post
  const toggleOptions = (postId: string) => {
    setShowOptions((prev) => (prev === postId ? null : postId)); // Showing options if post ID is clicked
  };

  return (
    <div className="p-10 mb-10">
      <div className="mb-8">
        <p className="text-center text-gray-500 font-semibold mb-8 text-sm">Contributions in the form of viewpoints, hypotheses, and additional affirmations are encouraged here</p>
        <p className="text-2xl font-bold mb-5">
          {editingPost ? "Amending an Entry" : "Publish a New Entry"}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border-2 border-black rounded-md focus:outline-none focus:border-gray-100"
          />
          <textarea
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border-2 border-black rounded-md h-52 focus:outline-none focus:border-gray-100"
          />
          <button type="submit" className="bg-black text-white py-1 px-6 rounded-lg hover:text-gray-400 active:text-gray-400 shadow-xl">
            <h3>{editingPost ? "Amend" : "Publish"}</h3>
          </button>
        </form>
        {successMessage && (
          <div className="text-center text-gray-500 font-semibold mb-8 text-sm">
            {successMessage}
          </div>
        )}
      </div>

      <p className="text-2xl font-bold mt-20 mb-5">Forum Entries</p>
      {posts.map((post) => (
        <div key={post.id} className="shadow-md rounded-md bg-white p-4 mb-5 relative">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-xl font-bold">{post.title}</p>
              <p className="text-sm text-gray-500">
                <strong>{post.author.name}</strong> |{" "}
                {new Date(post.createdAt.seconds * 1000).toLocaleString()}
              </p>
            </div>
            <div className="flex space-x-4">
              <BsThreeDotsVertical
                className="cursor-pointer"
                onClick={() => toggleOptions(post.id)}
              />
              {showOptions === post.id && post.author.id === auth.currentUser?.uid && (
                <div className="absolute right-1 bg-white shadow-lg mt-2 p-2 rounded-md">
                  <button onClick={() => handleEdit(post)} className="w-full text-left text-sm text-blue-600">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="w-full text-left text-sm text-red-500">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <p>{post.text}</p>

          <div className="mt-4 flex justify-start items-center space-x-4">
            <div className="flex items-center space-x-1 cursor-pointer">
              <LiaThumbsUpSolid
                className={`cursor-pointer ${post.likes.includes(auth.currentUser?.uid || "") ? "text-blue-600" : "text-black"}`}
                onClick={() => handleLike(post)}
              />
              <span>{post.likes.length > 0 ? post.likes.length : ""}</span>
            </div>

            <div className="flex items-center space-x-1 cursor-pointer">
              <LiaThumbsDownSolid
                className={`cursor-pointer ${post.dislikes.includes(auth.currentUser?.uid || "") ? "text-red-500" : "text-black"}`}
                onClick={() => handleDislike(post)}
              />
              <span>{post.dislikes.length > 0 ? post.dislikes.length : ""}</span>
            </div>

            <div className="flex items-center space-x-1 cursor-pointer">
              <MdOutlineInsertComment
                className="cursor-pointer"
                onClick={() => toggleComments(post.id)}
              />
              {/* Comment count */}
              <span>{post.comments.length > 0 ? post.comments.length : ""}</span>
            </div>
          </div>

          {activeComments === post.id && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full p-2 border-2 border-black rounded-md focus:outline-none focus:border-gray-100"
              />
              <button onClick={() => handleCommentSubmit(post.id)} className="bg-black text-white py-1 px-6 rounded-lg hover:text-gray-400 active:text-gray-400 shadow-xl mt-3">
                <h3>Comment</h3>
              </button>
              <div className="mt-4">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="border-b py-2 text-sm text-gray-500">
                    <strong>{comment.author}</strong> |{" "}
                    {new Date(comment.createdAt.seconds * 1000).toLocaleString()} <br />
                    <span className="text-black text-base leading-[1.8]">{comment.text}</span>
                    {comment.author === auth.currentUser?.displayName && (
                      <div className="mt-3">
                        <button
                          onClick={() => handleCommentDelete(post.id, comment.id)}
                          className="text-red-500 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    );
};