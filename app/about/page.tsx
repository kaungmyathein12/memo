import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Memo",
};

export default function About() {
  return (
    <main className="mx-auto w-full max-w-[800px] px-4 py-12">
      <h1 className="text-3xl sm:text-4xl">About Us</h1>
      <p className="mt-4 text-lg text-muted">
        Memo is a learning website that helps you study, remember, and grow a
        little every day.
      </p>
    </main>
  );
}
