"use client";

import Image from 'next/image';

export default function Verdict() {
  return (
    <div className="p-10 mb-20 mt-10 bg-white">
      {/* Title Section */}
      <div className="text-center mb-8">
        <p className="font-bold text-3xl uppercase text-black leading-tight">The Verdict</p>
        <div className="border-t-2 border-black my-4 w-16 mx-auto"></div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-105 mb-6">
        <Image
          src="/photos/verdict.jpg"
          alt="Verdict image"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>

      {/* Conclusion Statement */}
      <div className="bg-gray-100 p-6 shadow-md mt-5 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-800">
          <span className="text-xl font-bold">There’s a deeper layer</span> to this conversation in all honesty, especially regarding the connection between Islamic and Christian eschatology. This conversation extends into the forum, touching on Jerusalem’s role, more on the persecution of Jews and Christians, and exploring more complexities within Christian eschatology, such as the visions of Daniel, John, and Ezekiel, the symbolism of the beast’s horns, heads, and crowns, the apocryphal books, my speculations regarding the unveiling of the Antichrist and false prophet and much more. However, given the points outlined above, it’s difficult to overlook the similarities between the three major characters and the mark-enforcing creature described in Revelation, and the three characters and mark-enforcing creature referenced in the Hadiths centuries later.
        </p>

        <p className="mt-4 text-lg text-gray-800">
          Based on the evidence, it becomes clear that Christianity’s counterfeit behind its end-time apostasy does not require further exploration of other religious or non-religious movements. As of February 2025, Christianity leads the world in followers, with Islam in second place, and Judaism trailing far behind. Islam, for a fact, will not remain second place.
        </p>

        <p className="mt-4 text-lg text-gray-800">
          <span className="text-xl font-bold">For something to be a counterfeit of something, it must resemble the real thing.</span> Islamic eschatology is, in essence, Christian eschatology turned upside down. A Christian with only a surface-level understanding of Islam might say, "Christians and Muslims both worship one God, the Creator of the universe. Plus, Muslims believe in Jesus, the existence of demons, angels, the devil, and in heaven and hell too. Therefore, the God of the Bible and Allah must be the same." But it is precisely at this surface level where deception takes root. 
        </p>

        <p className="mt-4 text-lg text-gray-800 font-semibold">
          Islam, when examined closely, is revealed to be Christianity's greatest counterfeit and its most dangerous threat.
        </p>
      </div>
    </div>
  );
};
