"use client";

import { useState } from "react";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/mascot", label: "Mascot" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative mx-auto flex w-full max-w-[800px] items-center justify-between px-4 py-4">
      <Link href="/" className="text-2xl font-bold">Memo</Link>

      {/* Desktop */}
      <ul className="hidden items-center gap-4 sm:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
        <li>
          <LoginModal />
        </li>
      </ul>

      {/* Mobile */}
      <div className="flex items-center gap-2 sm:hidden">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex size-10 items-center justify-center rounded-full border-2 border-border"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <ul className="absolute inset-x-4 top-full z-10 flex flex-col gap-1 rounded-3xl border-2 border-border bg-surface p-4 shadow-[0_6px_0_var(--border)] sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 hover:bg-surface-muted"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 px-4 pb-1">
            <LoginModal />
          </li>
        </ul>
      )}
    </nav>
  );
}
