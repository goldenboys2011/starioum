"use client"
import { BoxReveal } from "@/components/magicui/box-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Reset when component unmounts
    };
  }, []);
    
  return (
    <>
    <footer className="content-center justify-self-center mt-8">
      <TypingAnimation className="text-5xl font-mono">Starioum ✦</TypingAnimation>
    </footer>
    <div className="mt-30" key="body">
      <div key="left" className="ml-40">
        <BoxReveal boxColor={"#232323"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Who are we?
            </p>
          </BoxReveal>
    
          <BoxReveal boxColor={"#363636"} duration={0.5}>
            <h2 className="mt-[.5rem] text-2xl flex items-center">
              The Sience {" "} 
              <WordRotate 
                className="text-2xl font-bold text-black dark:text-white ml-1 underline" 
                words={["Researchers", "Engineers"]} 
                duration={3500}
              />
            </h2>
          </BoxReveal>
        </div>    

        <div key="right" className="justify-self-end mr-40 mt-10">
          <BoxReveal boxColor={"#232323"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                What Do We Do?
              </p>
            </BoxReveal>
      
            <BoxReveal boxColor={"#363636"} duration={0.5}>
              <h2 className="mt-[.5rem] text-2xl flex items-center">
                <VelocityScroll
                  className="max-w-120 text-2xl"
                  numRows={1}
                  defaultVelocity={-3}
                  >
                    Scientific Researches, Vallidations, News & More...
                </VelocityScroll>
              </h2>
            </BoxReveal>
        </div>
      </div>
    </>
  );
}
