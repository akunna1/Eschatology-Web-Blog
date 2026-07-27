"use client";

export default function Intro1 () {
    return (
      <div className="flex flex-col items-center p-6 pb-1 mt-5 lg:mt-7">
        <div className="max-w-3xl 2xl:max-w-5xl">
          {/* Heading */}
          <p className="text-2xl font-bold mb-10 text-left">Begin Your Journey</p>
  
          {/* Section 1 */}
          <div className="mb-8 space-y-8">
            <div className="border-l-4 border-black pl-3">
              <p>
                Is the Bible really what it claims to be? What makes it stand out from any other ancient text? Are the prophecies it contains truly from God, or could they be human inventions? Perhaps you&apos;ve asked yourself these questions and struggled with doubts, just as I have. However, <span className="font-bold">studying eschatology reignited my belief </span> in the Bible&apos;s truth, and I believe it can do the same for you, whether you&apos;re a Christian, Atheist, Muslim, Jew, Agnostic, etc. I am also certain
                that patterns from the past can offer valuable insight into the future, confirming the reliability of biblical prophecy.
              </p>
            </div>
  
            {/* Bullet points outside the border */}
            <ul className="list-disc pl-6 space-y-2">
              <li>&quot;History merely repeats itself. It has all been done before. Nothing under the sun is truly new.&quot; - Ecclesiastes 1:9, NLT</li>
            </ul>
  
            {/* Gray Line */}
            <hr className="my-8 border-t border-gray-200" />
          </div>
          </div>
      </div>
    );
  };
  