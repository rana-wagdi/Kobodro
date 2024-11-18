"use client";

import { Hero } from "./components";
import PennyCount from "./components/PennyCount";

export default function Home() {
  return (
    <>
      <Hero />
      <PennyCount />
      <div className="flex flex-col px-4 sm:px-[17px] lg:px-[80px] gap-16">
        <main className="flex flex-col gap-8 row-start-2">
          {/* components here */}
        </main>
      </div>
    </>
  );
}
