"use client";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Save the current scroll position
    const scrollY = window.scrollY;
    
    // Lock scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';

    return () => {
      // Restore scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';

      // Restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <>
      <footer className="text-center mt-8">
        <TypingAnimation className="text-3xl md:text-5xl font-mono">
          Starioum ✦
        </TypingAnimation>
      </footer>

      <div className="mt-30 px-4 flex flex-col gap-20 w-full max-w-9/10 mx-auto">

        {/* Section 1 - Left Aligned */}
        <div className="self-start w-full sm:w-1/5">
          <BoxReveal boxColor={"#232323"} duration={0.5}>
            <p className="text-3xl md:text-[3.5rem] font-semibold">
              Who are we?
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#363636"} duration={0.5}>
            <h2 className="mt-2 text-xl md:text-2xl flex items-center">
              The Science{" "}
              <WordRotate
                className="text-xl md:text-2xl font-bold text-black dark:text-white ml-1 underline"
                words={["Researchers", "Engineers"]}
                duration={3500}
              />
            </h2>
          </BoxReveal>
        </div>

        {/* Section 2 - Right Aligned */}
        <div className="self-end w-full sm:w-2/7 text-right">
          <BoxReveal boxColor={"#232323"} duration={0.5}>
            <p className="text-3xl md:text-[3.5rem] font-semibold">
              What Do We Do?
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#363636"} duration={0.5}>
            <h2 className="mt-2 text-xl md:text-2xl flex justify-end">
              <VelocityScroll
                className="max-w-full md:max-w-[30rem] text-xl md:text-2xl"
                numRows={1}
                defaultVelocity={-3}
              >
                Scientific Researches, Validations, News & More...
              </VelocityScroll>
            </h2>
          </BoxReveal>
        </div>

      </div>
    </>
  );
}
