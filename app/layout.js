import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs Blog",
  description: "Blog created by Ibidapo Ayomide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} sm:px-20 px-4`}>{children}</body>
    </html>
  );
}
