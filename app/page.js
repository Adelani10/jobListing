"use client";
import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-lightGrayishCyan">
      <div className="container mx-auto">
        <header>
          <img
            src="/bg-header-desktop.svg"
            alt=""
            className="sm:inline-block hidden w-full"
          />
          <img
            src="/bg-header-mobile.svg"
            alt=""
            className="sm:hidden w-full"
          />
        </header>

        <div className="py-8 px-6 space-y-3">
          <Card />
        </div>
      </div>
    </main>
  );
}
