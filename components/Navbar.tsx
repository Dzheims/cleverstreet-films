import Image from "next/image";

export default function Navbar() {
  return (
    <>
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
    </>
  );
}
