import { Inter } from "next/font/google";
import "./globals.css";
import { Context } from "../context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job listing App",
  description: "List of jobs available",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>
          {children}
        </Context>
      </body>
    </html>
  );
}
