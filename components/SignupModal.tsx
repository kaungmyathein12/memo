"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function SignupModal({ label = "Sign up" }: { label?: string }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Modal
      label={label}
      title={showLogin ? "Welcome back!" : "Join Memo"}
      onOpen={() => setShowLogin(false)}
    >
      {showLogin ? <LoginForm /> : <SignupForm />}
      <p className="mt-6 text-center text-sm text-muted">
        {showLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setShowLogin(!showLogin)}
          className="text-accent underline hover:opacity-80"
        >
          {showLogin ? "Sign up" : "Login"}
        </button>
      </p>
    </Modal>
  );
}
