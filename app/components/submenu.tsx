"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { sampleData } from "../data/sampleData"; // sample data for search functionality
import { signInWithPopup, signOut, auth, provider } from '@/lib/firebase/config';

export default function Submenu() {
  const [user, setUser] = useState<any>(null);
  const [isClient, setIsClient] = useState(false); // Track if component is rendered on client-side
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // State to control search bar visibility and search input
  const [searchOpen, setSearchOpen] = useState(false); // Controls search bar visibility
  const [searchQuery, setSearchQuery] = useState(''); // Stores user input
  const [searchResults, setSearchResults] = useState<any[]>([]); // Stores live suggestions

  // Toggles the search bar overlay on and off
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Filters search suggestions as the user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]); // Clear results if input is empty
      return;
    }

    const filteredResults = sampleData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.text.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  // Handles search form submission, redirects to search results page
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchResults([]);
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    // Ensuring the component is rendered on the client-side
    setIsClient(true);
  }, []);

  // Getting the router instance
  const router = useRouter();

  // Setting up listener for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update user state when auth state changes
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  // Function to truncate text to 10 words
  const truncateText = (text: string, wordLimit: number = 10) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  // Handling Sign-in with Google
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router?.push('/entries'); // Redirect to /entries after successful login
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  // Handling Sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router?.push('/forum'); // Redirecting to /forum after sign-out
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  // toggle and dropdown menu
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white p-7 xl:px-10 shadow-md">
      <div className="w-full flex justify-between items-center">
        {/* Mobile Menu (sm) */}
        <div className="flex w-full justify-between sm:hidden">
          <div className="flex space-x-0 items-center">
            <Link href="/">
              <p className="times-new-roman transform hover:scale-110 text-2xl font-bold uppercase">The Counterfeit</p>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
              <IoIosSearch  onClick={toggleSearch}   className="text-2xl cursor-pointer relative z-30" />

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed -inset-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50" onClick={toggleSearch}>
            <div className="bg-white py-3 px-6 rounded-lg shadow-lg w-80 max-w-lg" onClick={(e) => e.stopPropagation()}>
              {/* Search Form */}
              <form onSubmit={handleSearch} className="flex items-center">
                <IoIosSearch className="text-2xl text-gray-500 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Noteworthy entries..."
                  className="grow p-2 text-lg border-none outline-none"
                />
              </form>

              {/* Live Search Suggestions */}
              {searchResults.length > 0 && (
                <ul className="mt-2 border-t w-full flex flex-col max-h-80 overflow-y-auto">
                  {searchResults.map((item, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(item.title);
                        router.push(`/search?query=${encodeURIComponent(item.title)}`);
                        setSearchResults([]);
                        setSearchOpen(false);
                      }}
                    >
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{truncateText(item.text, 10)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

            <button
              className="text-2xl hover:text-gray-400"
              onClick={toggleMenu}
            >
              {toggle ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </button>

          </div>
        </div>

        {/* Medium Screen Menu (md) */}
        <div className="hidden md:flex md:items-center md:justify-between md:w-full relative lg:hidden">
          {/* Left Side (md) */}
          <div className="flex items-center space-x-5">
            <Link href="/prelude">
              <h3 className="hover:text-gray-400">Prelude</h3>
            </Link>
            <Link href="/attestation">
              <h3 className="hover:text-gray-400">Attestation</h3>
            </Link>
            <div className="relative">
              {/* Three Dots Dropdown Menu (md) */}
              <button className="text-2xl hover:text-gray-400 flex items-center" onClick={toggleDropdown}>
                <HiOutlineDotsHorizontal />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 p-3 pl-0 bg-white border border-gray-100 rounded-lg shadow-md z-10">
                  <Link href="/forum">
                    <h3 className="px-4 py-1 mt-1 hover:text-gray-400">Forum</h3>
                  </Link>
                  <Link href="/map">
                    <h3 className="px-4 py-1 mt-1 hover:text-gray-400">Map</h3>
                  </Link>
                  <Link href="/digest">
                    <h3 className="px-4 py-1 mb-1 hover:text-gray-400">Digest</h3>
                  </Link>
                  <Link href="/about">
                    <h3 className="px-4 py-1 mt-1 hover:text-gray-400">About</h3>
                  </Link>
                  <Link href="/contact">
                    <h3 className="px-4 py-1 mb-1 hover:text-gray-400">Contact</h3>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Centered Title (md) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <Link href="/">
              <p className="times-new-roman transform hover:scale-110 text-xl font-bold uppercase">The Counterfeit</p>
            </Link>
          </div>

          {/* Right Side (md) */}
          <div className="flex items-center space-x-5 z-20">
            <IoIosSearch  onClick={toggleSearch}  className="cursor-pointer text-2xl relative z-30" />

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed -inset-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50" onClick={toggleSearch}>
            <div className="bg-white py-3 px-6 rounded-lg shadow-lg w-96 max-w-xl" onClick={(e) => e.stopPropagation()}>
              {/* Search Form */}
              <form onSubmit={handleSearch} className="flex items-center">
                <IoIosSearch className="text-2xl text-gray-500 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Noteworthy entries..."
                  className="grow p-2 text-lg border-none outline-none"
                />
              </form>

              {/* Live Search Suggestions */}
              {searchResults.length > 0 && (
                <ul className="mt-2 border-t w-full flex flex-col max-h-80 overflow-y-auto">
                  {searchResults.map((item, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(item.title);
                        router.push(`/search?query=${encodeURIComponent(item.title)}`);
                        setSearchResults([]);
                        setSearchOpen(false);
                      }}
                    >
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{truncateText(item.text, 10)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
            {!user ? (
              <button onClick={handleSignIn}><h3 className='transform hover:scale-110'>Sign In</h3></button>
            ) : (
              <button onClick={handleSignOut}><h3 className='transform hover:scale-110'>Sign Out</h3></button>
            )}
            <Link href="/digest">
              <button className="bg-black text-white py-1 px-6 rounded-lg  hover:text-gray-400 shadow-xl">
                <h3>Subscribe</h3>
              </button>
            </Link>
          </div>
        </div>

        {/* Large Screen Menu (lg) */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full relative xl:hidden">
          {/* Left Side (lg) */}
          <div className="flex items-center space-x-7">
              <IoIosSearch  onClick={toggleSearch}  className="cursor-pointer text-3xl relative z-30" />

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed -inset-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50" onClick={toggleSearch}>
            <div className="bg-white py-3 px-6 rounded-lg shadow-lg w-96 max-w-xl" onClick={(e) => e.stopPropagation()}>
              {/* Search Form */}
              <form onSubmit={handleSearch} className="flex items-center">
                <IoIosSearch className="text-2xl text-gray-500 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Noteworthy entries..."
                  className="grow p-2 text-lg border-none outline-none"
                />
              </form>

              {/* Live Search Suggestions */}
              {searchResults.length > 0 && (
                <ul className="mt-2 border-t w-full flex flex-col max-h-80 overflow-y-auto">
                  {searchResults.map((item, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(item.title);
                        router.push(`/search?query=${encodeURIComponent(item.title)}`);
                        setSearchResults([]);
                        setSearchOpen(false);
                      }}
                    >
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{truncateText(item.text, 10)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

          </div>

          {/* Centered Title (lg) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
            <Link href="/">
              <p className="times-new-roman transform hover:scale-110 text-3xl font-bold uppercase">
                The Counterfeit
              </p>
              <p className="uppercase text-xs mt-2 mb-2 font-bold italic">
                Unveiling Christianity’s Utmost Counterfeit Behind Its End-Times Apostasy
              </p>
            </Link>
          </div>

          {/* Right Side (lg) */}
          <div className="flex items-center space-x-7 z-20">
          {!user ? (
              <button onClick={handleSignIn}><h3 className='transform hover:scale-110'>Sign In</h3></button>
            ) : (
              <button onClick={handleSignOut}><h3 className='transform hover:scale-110'>Sign Out</h3></button>
            )}
            <Link href="/digest">
              <button className="bg-black text-white py-1 px-6 rounded-lg  hover:text-gray-400 shadow-xl">
                <h3>Subscribe</h3>
              </button>
            </Link>
          </div>
        </div>

        {/* Extra Large Screen Menu (xl) */}
        <div className="hidden xl:flex xl:items-center xl:justify-between xl:w-full relative">
          {/* Left Side (xl) */}
          <div className="flex items-center space-x-7">
            {/* Search icon to open the search bar */}
            <IoIosSearch onClick={toggleSearch} className="cursor-pointer text-3xl relative z-30" />

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed -inset-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50" onClick={toggleSearch}>
            <div className="bg-white py-3 px-6 rounded-lg shadow-lg w-120 max-w-2xl" onClick={(e) => e.stopPropagation()}>
              {/* Search Form */}
              <form onSubmit={handleSearch} className="flex items-center">
                <IoIosSearch className="text-2xl text-gray-500 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Noteworthy entries..."
                  className="grow p-2 text-lg border-none outline-none"
                />
              </form>

              {/* Live Search Suggestions */}
              {searchResults.length > 0 && (
                <ul className="mt-2 border-t w-full flex flex-col max-h-80 overflow-y-auto">
                  {searchResults.map((item, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(item.title);
                        router.push(`/search?query=${encodeURIComponent(item.title)}`);
                        setSearchResults([]);
                        setSearchOpen(false);
                      }}
                    >
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{truncateText(item.text, 10)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
          </div>


          {/* Centered Title (xl) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
            <Link href="/">
              <p className="times-new-roman transform hover:scale-110 text-3xl font-bold uppercase">
                The Counterfeit
              </p>
              <p className="uppercase text-xs mt-2 mb-2 font-bold italic">
                Unveiling Christianity’s Utmost Counterfeit Behind Its End-Times Apostasy
              </p>
            </Link>
          </div>

          {/* Right Side (xl) */}
          <div className="flex items-center space-x-7 z-20">
          {!user ? (
              <button onClick={handleSignIn}><h3 className='transform hover:scale-110'>Sign In</h3></button>
            ) : (
              <button onClick={handleSignOut}><h3 className='transform hover:scale-110'>Sign Out</h3></button>
            )}
            <Link href="/digest">
              <button className="bg-black text-white py-1 px-6 rounded-lg hover:text-gray-400 shadow-xl">
                <h3>Subscribe</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Burger Menu (sm) */}
      {toggle && (
        <div className="rounded-lg border-2 border-white p-2 sm:w-full md:hidden flex flex-col justify-between max-h-dvh">
          <div className="grow flex items-center justify-center">
            <table className="w-full text-center mt-36">
              <tbody>
              <tr className="border-b-2 border-white">
                  <td className="py-2 pl-4">
                    <Link href="/prelude">
                      <h3 className="hover:text-gray-400 text-lg">Prelude</h3>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="py-2 pl-4">
                    <Link href="/attestation">
                      <h3 className="hover:text-gray-400 text-lg">Attestation</h3>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="py-2 pl-4">
                    <Link href="/forum">
                      <h3 className="hover:text-gray-400 text-lg">Forum</h3>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="py-2 pl-4">
                    <Link href="/map">
                      <h3 className="hover:text-gray-400 text-lg">Map</h3>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="py-2 pl-4">
                    <Link href="/digest">
                      <h3 className="hover:text-gray-400 text-lg">Digest</h3>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="py-2 pl-4">
                    <Link href="/about">
                      <h3 className="hover:text-gray-400 text-lg">About</h3>
                    </Link>
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="py-2 pl-4">
                    <Link href="/contact">
                      <h3 className="hover:text-gray-400 text-lg">Contact</h3>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-36 mb-10">
          <Link href="/digest">
            <button className="bg-black w-fit text-white py-1 px-6 rounded-lg hover:text-gray-400 shadow-xl">
              <h3>Subscribe</h3>
            </button>
          </Link>

            {!user ? (
              <button onClick={handleSignIn}><h3 className='transform hover:scale-110 text-lg'>Sign In</h3></button>
            ) : (
              <button onClick={handleSignOut}><h3 className='transform hover:scale-110 text-lg'>Sign Out</h3></button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}


