"use client";

import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <section
        aria-label="Contact me section"
        className="ml-[16px] lg:ml-[50px] mt-10"
      >
        <h1 className="font-bold text-pink-500 ">Contact me</h1>
        <p className="text-sm animate-pulse text-white">
          Have a project in mind? <span>Let's talk!</span>{" "}
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2d0c2N1dnY1MW52djJ3eHFrYjB3YzZ0NzUybXdyOXAxNjNpbWRyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lR6Xtly3SKVZP4w9QC/giphy.gif"
            alt="Animated rotating arrow"
            className="w-15 h-15 "
          />
        </p>

        <form className="flex flex-col justify-center items-center border w-80 sm:w-90 lg:w-100 mx-auto p-5 rounded-2xl ">
          <label htmlFor="email" className="text-white">
            {" "}
            Email
            <input
              type="text"
              id="email"
              placeholder="anastasia@gmail.com"
              className="p-1 text-center ml-2 border rounded-2xl"
            />
          </label>
          <label htmlFor="email" className="flex mt-4 text-white ">
            {" "}
            Message
            <input
              type="text"
              id="email"
              placeholder="I want work with you..."
              className="p-1 text-center ml-1 border  rounded-2xl"
            />
          </label>
          <button className="border text-white mt-4 py-2 px-4 rounded-2xl transition-colors hover:border-violet-500 duration-150">
            Send
          </button>
        </form>
        <h2 className="mt-[30px] sm:mt-[40px] lg:mt-[50px] font-bold text-white">
          My Social Medias
        </h2>
        <p className="text-sm text-white">subscribe</p>
        <ul className="flex  mt-5 gap-2">
          <li className="flex w-[40px] h-[40px] rounded-full items-center border  border-white">
            <a
              href="https://github.com/AnastasiaSaienko634"
              className="mx-auto"
            >
              <FaGithub className="w-[30px] h-[30px] mx-auto fill-white hover:scale-105" />
            </a>
          </li>
          <li className="flex w-[40px] h-[40px] rounded-full items-center border  border-white hover:scale-105">
            <a href="" className="mx-auto">
              <FaYoutube className="w-[30px] h-[30px] mx-auto fill-red-400" />
            </a>
          </li>
          <li className="flex w-[40px] h-[40px] rounded-full items-center border  border-white hover:scale-105 ">
            <a
              href="https://www.linkedin.com/in/saienkoanastasia/"
              className="mx-auto"
            >
              <FaLinkedin className="w-[30px] h-[30px] mx-auto fill-blue-500  " />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
