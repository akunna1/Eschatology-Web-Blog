"use client";

import Image from 'next/image';

export default function About() {
  return (
    <div className="p-10 mb-10 mt-10 bg-white max-w-4xl 2xl:max-w-6xl mx-auto">
      <p className="text-4xl font-bold text-left mb-6">About Me</p>
      
      <p className="leading-relaxed mb-6">
        Growing up in southern Nigeria, I was constantly exposed to reports of Boko Haram, a prominent Islamic terrorist group,  brutally attacking Christians in the north and was always loomed by fear that they would eventually push southward. I later relocated to the U.S. to begin my college studies, and as a freshman, I took my first-ever world religion class, where my professor convinced us students that Islam is all about peace, which honestly conflicted with what I had witnessed in Nigeria, and that Muslims, Christians, and Jews worship the same God. Despite that, I felt I was in no position to question him, believing his PhD in Theology gave him authority. Years later, I’m now using my passion for debunking common theological perspectives and full-stack development to challenge that view through this app, helping Christians better understand one of the most overlooked books of the Bible, Revelation, and the role of Islam, in addition to Judaism, in the last days, driven not by credentials but by calling and conviction.
      </p>

      <div className="mb-6 flex justify-center">
        <Image
          src="/photos/me.jpg"
          alt="A picture of me"
          width={300}
          height={300}
          priority
          className='border-8 border-black'
        />
      </div>

      <p className="leading-relaxed mb-6">
        I am a supporter of restorationism, futurism, and premillennialism, and my arguments are grounded in these perspectives because they align the most perfectly with the teachings of the Bible. These views correspond with the Abrahamic, Mosaic, Davidic, and New Covenants, which provide a coherent framework for understanding God’s plan for humanity and His promises to Israel. In contrast, I find that supersessionism, preterism, and amillennialism fail to fully account for the future restoration of Israel and the fulfillment of prophecies, often overlooking the distinct purposes each covenant serves. Through this app, I aim to help others grasp how these biblical doctrines shape our understanding of the last days, reaffirming the hope and future God has outlined for His people.
      </p>

      <p className="leading-relaxed mb-6">
        Do you know that the dead sleep until the last days, where they are all resurrected when Jesus Christ returns? At that moment, the followers of Jesus will be separated from the non-followers for eternity. The followers will experience a resurrected life in a resurrected body, living alongside the resurrected Christ on a resurrected earth. This is the hope of the Christian faith, the promise of eternal life in perfect communion with God, where death and sorrow are no more.
      </p>
    </div>
  );
};
