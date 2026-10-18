"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function LoginModal() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Modal
      label="Login"
      title={showSignup ? "Join Memo" : "Welcome back!"}
      onOpen={() => setShowSignup(false)}
    >
      {showSignup ? <SignupForm /> : <LoginForm />}
      <p className="mt-6 text-center text-sm text-muted">
        {showSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          onClick={() => setShowSignup(!showSignup)}
          className="text-accent underline hover:opacity-80"
        >
          {showSignup ? "Login" : "Sign up"}
        </button>
      </p>
    </Modal>
  );
}
