"use client";

import type { FormEvent } from "react";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

export default function SignupForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Auth isn't wired up yet; the form only collects the values for now.
    const values = Object.fromEntries(new FormData(event.currentTarget));
    console.log("signup", values);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <TextField label="Username" name="username" required autoComplete="username" />
      <TextField label="Email" name="email" type="email" required autoComplete="email" />
      <TextField
        label="Password"
        name="password"
        type="password"
        required
        autoComplete="new-password"
      />
      <Button type="submit" className="mt-2 w-full">
        Sign up
      </Button>
    </form>
  );
}
