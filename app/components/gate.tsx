"use client";

import Image from 'next/image';

export default function Gate() {
  return (
    <section className="px-8 py-6 w-full mt-8 mb-10">
      <p className="text-2xl font-bold mb-4 lg:mb-6">
        Welcome to the Forum
      </p>

      <div className="flex flex-col-reverse lg:flex-row mb-8 lg:space-x-8">
        {/* Text on top for mobile/medium screens, Image on top for large screens */}
        <div className="w-full lg:w-1/2 space-y-6 text-lg">
          <p>
            This forum serves as a continuation of the discussions presented on the Attestation page, delving further into the eschatologies of the major monotheistic religions—Christianity, Islam, and Judaism and how they are likely to converge. It provides a space to explore past and current theories, more prophecies, and speculations about the end times.          
          </p>
          <p>
            Here, I welcome discussions on recent news, varying interpretations of sacred texts, and the opinions of scholars, theologians, and anyone interested in the subject. Feel free to share thoughts, challenge ideas, and engage in meaningful conversations.
          </p>
          <p>
            To participate in discussions, sign in using a Gmail account. Once signed in, posting, commenting on contributions, liking posts, and engaging with others will be enabled in this unique space.
          </p>
          <p className="font-semibold">
            Click the sign-in button in the menu above to get started!
          </p>
        </div>

        {/* Image on bottom for mobile/medium screens, Image on left for large screens */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/photos/debate.jpg"
            alt="Debate Image"
            width={1920}
            height={400}
            priority
            className="shadow-lg w-full mb-8 lg:mb-0 border-8 border-black"
          />
        </div>
      </div>
    </section>
  );
};
