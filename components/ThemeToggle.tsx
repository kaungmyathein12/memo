"use client";

export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  // Both icons are rendered and CSS shows the right one, so the server and
  // client markup always match.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex size-10 items-center justify-center rounded-full border-2 border-border text-lg"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  );
}
