import { BoxReveal } from "@/components/magicui/box-reveal";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
export default function Home() {
  return (
    <>
    <footer className="content-center justify-self-center mt-8">
      <TypingAnimation className="text-5xl font-mono">Starioum ✦</TypingAnimation>
    </footer>
    <div className="content-center mt-30 ml-40" key="body">
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
              words={["Researchers", "Enginiars"]} 
              duration={3500}
            />
          </h2>
        </BoxReveal>
      </div>
    </>
  );
}
