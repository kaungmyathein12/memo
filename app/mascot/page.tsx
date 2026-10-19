import type { Metadata } from "next";
import Mimo from "@/components/Mimo";

export const metadata: Metadata = {
  title: "Mascot",
};

const reasons = [
  {
    title: "Lazy on purpose",
    description:
      "Hippos spend most of the day resting in water. Mimo is proof that you don't need to study for hours. A few minutes a day is enough.",
  },
  {
    title: "Slow but steady",
    description:
      "Mimo never rushes. One new word every day adds up to 365 words a year.",
  },
  {
    title: "Always holding a word",
    description:
      "Mimo carries a word card everywhere, just in case a new word turns up.",
  },
];

export default function MascotPage() {
  return (
    <main className="mx-auto w-full max-w-[800px] px-4 py-12">
      <section className="text-center">
        <p className="text-sm uppercase tracking-widest text-subtle">Our mascot</p>
        <h1 className="mt-2 text-4xl leading-tight sm:text-5xl">
          Meet <span className="text-accent">Mimo</span>, the sleepy hippo
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
          Mimo is a lazy hippo who still learns a new word every day.
        </p>
      </section>

      <section className="mt-10 rounded-3xl border-2 border-border shadow-[0_6px_0_var(--border)]">
        <Mimo className="h-80 w-full py-4 sm:h-96" />
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-center text-2xl">Why a hippo?</h2>
        <ul className="grid gap-6 sm:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="rounded-3xl border-2 border-border p-6">
              <h3 className="text-xl">{reason.title}</h3>
              <p className="mt-2 text-muted">{reason.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
