"use client";

import Image from 'next/image';

export default function Contact() {
  return (
    <div className="p-10 mb-20 mt-10 bg-white max-w-3xl 2xl:max-w-5xl mx-auto">
      <p className="text-4xl font-bold text-left mb-6">Contact Me</p>

      <p className="leading-relaxed mb-4">
        Have questions or thoughts on the unfolding events of the end times? I invite you to reach out to me. Whether you're seeking to discuss eschatology, biblical prophecy, or have a related inquiry, feel free to get in touch.
      </p>
      <p className="leading-relaxed mb-4">
        You can easily contact me via email for any questions or collaboration. I am eager to engage with like-minded individuals on the topics of faith, prophecy, and the eschatological themes that shape our understanding of the final days.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Reach me at{' '}
          <a 
            href="mailto:info@akunnatechstudio.com" 
            className="font-semibold underline decoration-2 hover:underline hover:scale-105 active:underline active:scale-105 transition-transform duration-200 inline-block"
          >
            info@akunnatechstudio.com
          </a>{' '}
          for any inquiries.
        </li>
      </ul>

      {/* Image Below the Text */}
      <div className="mt-6 relative w-full h-105 rounded-lg shadow-lg">
        <Image
          src="/photos/contact.jpg"
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};
