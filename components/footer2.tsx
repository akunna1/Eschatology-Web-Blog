"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from '@/lib/firebase/config';
import { useState, useEffect } from "react";

export default function Footer2() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!email) return setMessage("Please enter a valid email.");

    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        createdAt: new Date(),
      });
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

      useEffect(() => {
        if (message) {
          const timer = setTimeout(() => setMessage(""), 4000);
          return () => clearTimeout(timer); // Cleanup timeout on unmount
        }
      }, [message]);

      
  return (
    <div className="p-10 md:p-20 flex flex-col justify-center items-center text-center mb-20">
      <div className="mb-3">
        <p className="times-new-roman uppercase text-3xl font-bold text-gray-800">The Citadel</p>
      </div>
      <p className=" text-gray-700 mb-8 max-w-lg">
        Welcome to THE CITADEL. Stay equipped with resources on eschatology, gain insight into prophecies, and connect with others. Join us👇
      </p>

      <div >
        <form onSubmit={handleSubscribe} className="relative flex items-center justify-center">
          <input
            type="email"
            placeholder="maranatha@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 text-sm rounded-lg w-80 md:w-96 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 pr-16"
            required
          />
          <button type="submit" className="absolute right-2 bg-black py-1 px-6 rounded-lg shadow-xl">
            <h3 className="text-white hover:text-gray-400 active:text-gray-400">Subscribe</h3>
          </button>
          {message && <p className="absolute top-full mt-2 text-sm text-gray-600">{message}</p>}
        </form>
      </div>
      
    </div>
  );
};



