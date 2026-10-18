"use client";

import type { FormEvent } from "react";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

export default function LoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Auth isn't wired up yet; the form only collects the values for now.
    const values = Object.fromEntries(new FormData(event.currentTarget));
    console.log("login", values);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <TextField label="Email" name="email" type="email" required autoComplete="email" />
      <TextField
        label="Password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
      />
      <Button type="submit" className="mt-2 w-full">
        Login
      </Button>
    </form>
  );
}
