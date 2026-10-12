import Image from "next/image";
import { Button } from "@/components/ui";

const advantages = [
  {
    title: "Remember What You Learn",
    description:
      "Review difficult words and practice them again to help reinforce long-term memory.",
    width: "max-w-[212px]",
  },
  {
    title: "Learn Smarter with Memo",
    description:
      "Build your English vocabulary, strengthen your memory, and practice using words with confidence.",
    width: "max-w-[295px]",
  },
  {
    title: "Personal Vocabulary Library",
    description:
      "Save English words, meanings, example sentences, and personal notes in one organized place.",
    width: "max-w-[266px]",
  },
  {
    title: "Random Quizzes and Real-World Usage",
    description:
      "Test yourself with multiple-choice questions and typing exercises to strengthen your understanding.",
    width: "max-w-[240px]",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background px-6 py-20 font-sans">
      <div className="flex w-full max-w-[600px] flex-col gap-20">
        <header>
          <p className="text-2xl/[normal] font-bold">Memo</p>
          <p className="text-base/[normal] text-muted">
            Practice English Every Day
          </p>
        </header>

        <main className="flex flex-col gap-20">
          <section className="flex flex-col gap-7">
            <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-2.5">
              <div className="flex flex-col items-start gap-4 sm:w-[390px]">
                <h1 className="text-[2rem]/[normal] font-bold">
                  Learn new words. Remember them longer.
                </h1>
                <Button>Start Learning</Button>
              </div>
              <Image
                className="size-[200px] shrink-0"
                src="/hero.png"
                alt="Illustration of a learner studying vocabulary flashcards and a quiz"
                width={200}
                height={200}
                priority
              />
            </div>
            <p className="text-base/[normal] text-muted">
              Build your English vocabulary one word at a time. Save meanings,
              explore example sentences, and practice with random quizzes
              designed to help you remember and use words with confidence.
            </p>
          </section>

          <section className="flex flex-col items-center gap-10">
            <h2 className="text-2xl/[normal] font-bold">Advantages</h2>
            <ul className="grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2">
              {advantages.map(({ title, description, width }) => (
                <li
                  key={title}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <h3 className="max-w-[240px] text-xl/[normal] font-bold">
                    {title}
                  </h3>
                  <p className={`text-base/[normal] text-muted ${width}`}>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
