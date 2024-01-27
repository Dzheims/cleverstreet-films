"use client";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 z-0 h-screen w-full">
        <Image
          src="/explore/gradient-bg.png"
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/explore/noise.png"
          alt="Noise filter"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative flex flex-col items-center text-center h-[473px] w-full z-10 border-b-[1px] border-b-white border-opacity-15">
        <div className="mt-[108px] font-tusker-bold text-[64px] leading-[130%] tracking-[0.64px]">
          EXPLORE FILMS AND <br /> CINEMATIC ACHIEVEMENTS
        </div>
        <div className="mt-2 font-barlow-condensed text-[24px] tracking-[-0.48px]">
          OUR FEATURED FILMS BREATHE LIFE INTO STORYTELLING.
        </div>
        <div className="absolute flex px-[30px] font-barlow-condensed text-[16px] justify-between w-full bottom-[30px] left-0">
          <div>FILTER:</div>
          <div className="flex gap-x-[30px] justify-end w-full">
            <div className="underline font-semibold cursor-pointer">
              PAST PROJECTS
            </div>
            <div className="cursor-pointer">UPCOMING PROJECTS</div>
            <div className="cursor-pointer">FAN SITES</div>
            <div className="cursor-pointer">CINEMATIC MOMENTS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
