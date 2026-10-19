import type { Metadata } from "next";
import { Madimi_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const madimiOne = Madimi_One({
  weight: "400",
  subsets: ["latin"],
});

const description =
  "Learn a new word every day and actually remember it. Save the words you learn, and Memo quizzes you until they stick.";

export const metadata: Metadata = {
  metadataBase: new URL("https://memo-zeta-rust.vercel.app"),
  title: {
    default: "Memo – Learn a new word every day",
    template: "%s | Memo",
  },
  description,
  openGraph: {
    title: "Memo – Learn a new word every day",
    description,
    siteName: "Memo",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memo – Learn a new word every day",
    description,
  },
};

// Runs before paint so the saved (or system) theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${madimiOne.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
