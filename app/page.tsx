import Link from "next/link";
import SignupModal from "@/components/SignupModal";
import DemoCard from "@/components/DemoCard";
import Mimo from "@/components/Mimo";

const steps = [
  {
    emoji: "📝",
    title: "Save",
    description: "Learned a new word today? Save it with its meaning.",
  },
  {
    emoji: "🎲",
    title: "Practice",
    description: "Memo picks a random word and hides the meaning.",
  },
  {
    emoji: "🧠",
    title: "Remember",
    description: "Guess, reveal, and keep the words you learn for good.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[800px] px-4">
      <section className="py-12 text-center sm:py-16">
        <Link href="/mascot" aria-label="Meet Mimo, our mascot" className="inline-block">
          <Mimo className="mb-6 size-40 sm:size-48" />
        </Link>
        <h1 className="text-4xl leading-tight sm:text-5xl">
          Learn a new word every day.
          <br />
          <span className="text-accent">Actually remember it.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
          We forget new words because we never practice them. Save the words
          you learn, and Memo will quiz you until they stick.
        </p>
        <div className="mt-8">
          <SignupModal label="Get started" />
        </div>
      </section>

      <section className="pb-16">
        <h2 className="mb-8 text-center text-2xl">How it works</h2>
        <ol className="grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.title}
              className="rounded-3xl border-2 border-border p-6 text-center"
            >
              <span className="text-4xl">{step.emoji}</span>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-2 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pb-16">
        <h2 className="mb-6 text-center text-2xl">Try it out</h2>
        <DemoCard />
      </section>

      <section className="mb-16 rounded-3xl bg-accent-soft px-6 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl">Stop forgetting your new words</h2>
        <p className="mt-3 text-muted">One word a day adds up to 365 a year.</p>
        <div className="mt-6">
          <SignupModal label="Create your free account" />
        </div>
      </section>
    </main>
  );
}
