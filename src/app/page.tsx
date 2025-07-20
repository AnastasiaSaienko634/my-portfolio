"use client";

import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section
        aria-label="Intro section"
        className="flex flex-col  justify-center items-center mx-auto "
      >
        <div className="justify-center h-[200px] w-[200px]  cool-gradient rounded-full border border-white">
          <Image
            alt="my-photo"
            src="/image/8370efcf-6d1b-4e86-a3be-8632ed396650.png"
            width={145}
            height={100}
            className="  mx-auto "
          />
        </div>
        <p className="flex  font-bold text-2xl text-white sm:text-3xl   lg:text-4xl   justify-center mt-4 ">
          Anastasia Saienko
        </p>

        <p className="pt-3 pb-2 text-sm sm:text-xl lg:text-2xl font-bold glow-text flicker">
          Fullstack devolper
        </p>
        <p className="w-90 sm:w-[400px]  text-white lg:w-170 text-center pt-2">
          {" "}
          I am an 18-year-old Full-Stack Developer student currently studying at
          GoIT. I have a strong passion for coding and enjoy creating functional
          and efficient applications. Over the past year, I have been dedicated
          to learning programming and continuously improving my skills in both
          frontend and backend development. I am eager to grow as a developer
          and contribute to exciting projects.
        </p>
        <Link
          href="/contact"
          className="mt-5 mb-10  py-2 px-6 border text-white border-violet-300 rounded-3xl transition-all duration-150 hover:scale-105 hover:bg-violet-300 hover:text-gray-700"
        >
          Contact me
        </Link>
      </section>
    </>
  );
}
