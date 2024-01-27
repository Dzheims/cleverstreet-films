"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full px-[60px] pt-[73px]">
      <Image
        src="/hero/hero-bg.png"
        alt="Hero background"
        fill
        style={{ objectFit: "cover" }}
        className="relative top-0 left-0 z-0 pointer-events-none"
      />
      <Image
        src="/hero/noise.png"
        alt="Noise filter"
        fill
        style={{ objectFit: "cover" }}
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />
      <div className="absolute top-5 left-0 w-full flex justify-center z-10">
        <Image
          src="/cleverstreet.svg"
          alt="Cleverstreet"
          width={123}
          height={120}
          className="pointer-events-none"
        />
      </div>
      <div className="relative flex z-20 justify-between font-tusker-medium leading-normal text-[14px] tracking-[0.14px] uppercase">
        <div className="relative flex gap-x-[30px]">
          <a href="/home">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="/past-projects">PAST PROJECTS</a>
          <a href="/upcoming-projects">UPCOMING PROJECTS</a>
        </div>
        <div className="relative flex gap-x-[30px]">
          <a href="/fan-sites">FAN SITES</a>
          <a href="/cinematics-moments">CINEMATICS MOMENTS</a>
          <a href="/in-the-press">IN THE PRESS</a>
          <a href="/contact-us">CONTACT US</a>
        </div>
      </div>
      <div
        className={`font-barlow-condensed text-[14px] leading-[64px] tracking-[0.28px] pointer-events-none absolute bottom-5 left-0 w-full flex flex-col items-center z-10`}
      >
        <div>SCROLL TO DISCOVER</div>
        <Image
          src="/hero/down-icon.svg"
          alt="Cleverstreet"
          width={20}
          height={20}
          // className="absolute top-0 left-0 z-0"
        />
      </div>
    </div>
  );
}
