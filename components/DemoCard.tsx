"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const sampleWords = [
  { word: "Ephemeral", meaning: "Lasting for a very short time." },
  { word: "Serendipity", meaning: "Finding something good without looking for it." },
  { word: "Resilient", meaning: "Able to recover quickly from difficulties." },
  { word: "Meticulous", meaning: "Showing great attention to detail." },
  { word: "Eloquent", meaning: "Fluent and persuasive in speaking or writing." },
];

export default function DemoCard() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { word, meaning } = sampleWords[index];

  function nextWord() {
    // Pick a different random word so the card always changes.
    let next = index;
    while (next === index) {
      next = Math.floor(Math.random() * sampleWords.length);
    }
    setIndex(next);
    setRevealed(false);
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border-2 border-border bg-surface p-6 sm:p-8 text-center shadow-[0_6px_0_var(--border)]">
      <p className="text-sm uppercase tracking-widest text-subtle">
        What does this mean?
      </p>
      <p className="mt-4 break-words text-3xl text-accent sm:text-4xl">{word}</p>

      <div className="mt-6 flex min-h-16 items-center justify-center rounded-2xl bg-surface-muted px-4">
        {revealed ? (
          <p className="text-lg text-foreground">{meaning}</p>
        ) : (
          <p className="text-lg tracking-widest text-subtle">• • • • •</p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        {revealed ? (
          <Button type="button" onClick={nextWord}>
            Next word
          </Button>
        ) : (
          <Button type="button" onClick={() => setRevealed(true)}>
            Show meaning
          </Button>
        )}
      </div>
    </div>
  );
}
