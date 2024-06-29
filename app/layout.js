import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs Blog",
  description: "Blog created by Ibidapo Ayomide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`dark:bg-black/90 bg-gray-50`}>{children}</body>
    </html>
  );
}
