import Image from "next/image";
import Navbar from "./Navbar";

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
      <Navbar />
      <div
        className={`font-barlow-condensed text-[14px] leading-[64px] tracking-[0.28px] pointer-events-none absolute bottom-5 left-0 w-full flex flex-col items-center z-10`}
      >
        <div>SCROLL TO DISCOVER</div>
        <Image
          src="/hero/down-icon.svg"
          alt="Cleverstreet"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
