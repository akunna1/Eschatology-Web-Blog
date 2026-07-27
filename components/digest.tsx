import Image from 'next/image'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/lib/firebase/config';
import { useState, useEffect } from "react";

export default function Digest() {
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
    <section className="py-15 lg:py-20 text-center mb-20">
      <div className="max-w-7xl 2xl:max-w-372 mx-auto px-2 md:px-8">
        {/* Title Section */}
        <div className="text-left mb-16">
          <p className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight sm:px-16 md:px-24 lg:px-60">
            Illuminate Your Mind, Fortify Your Faith, Unite Your Community
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="bg-gray-50 p-8 rounded-md shadow-lg">
            <Image
              src="/photos/castlex.svg"
              alt="The Citadel"
              width={600}
              height={600}
              className="mx-auto mb-6 drop-shadow-lg"
            />
            <p className="text-gray-700 mt-4 text-xl font-semibold italic">The Citadel: Your Stronghold of Eschatological Insight</p>
          </div>

          {/* Right Column */}
          <div className="bg-black text-white p-10 rounded-md shadow-lg">
            <p className="text-5xl font-bold text-center xl:text-left leading-snug">Join THE CITADEL</p>
            <p className="text-xl mt-6 mb-8 leading-relaxed">
              Engage in profound discussions, unravel the mysteries of the end times, and strengthen your understanding of eschatology alongside a vibrant community 🎈
            </p>

            {/* Integrated Input with Button Inside*/}
            <div className="relative w-full max-w-lg mx-auto">
              <form onSubmit={handleSubscribe} className="relative flex items-center justify-center">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white p-5 text-lg rounded-lg w-full text-black focus:outline-none focus:ring-4 focus:ring-black pr-32"
                required
              />
              <button type="submit" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white py-3 px-8 rounded-lg hover:text-gray-400 active:text-gray-400 transition-transform font-medium text-lg">
                Subscribe
              </button>
              {message && <p className="absolute top-full mt-10 text-sm text-gray-600">{message}</p>}
              </form>
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
};