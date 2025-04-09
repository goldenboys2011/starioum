"use client";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { ArrowDownFromLine } from "lucide-react";

export default function Home() {

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
      <div className="snap-always snap-center">
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
                  className="max-w-50 md:max-w-[30rem] text-xl md:text-2xl"
                  numRows={1}
                  defaultVelocity={-3}
                >
                  Scientific Researches, Validations, News & More...
                </VelocityScroll>
              </h2>
            </BoxReveal>
          </div>

          <div
            key="scrollIcon"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center"
          >
            <ArrowDownFromLine className="w-5 h-5" />
          </div>


        </div>
      </div>

      <div className="mt-100 px-4 flex flex-col gap-20 w-full max-w-9/10 mx-auto snap-always snap-center">
        <div className={`relative min-h-screen flex`}>
          <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
                  Page 1
          </div>
        </div>
      </div>

    </div>
  );
}
