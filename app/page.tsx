"use client";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#141414] text-white justify-between">
      <Hero />
      <Explore />
    </main>
  );
}
