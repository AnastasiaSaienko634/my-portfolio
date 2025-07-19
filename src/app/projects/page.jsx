import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectsPage() {
  return (
    <>
      <div>
        <h2 className="flex text-2xl   lg:text-3xl items-center glow-text flicker font-sans  justify-center gap-2 pb-2">
          My Projects
        </h2>
        <ul className="flex flex-wrap gap-[20px] lg:gap-[40px] justify-center p-4 px-[16px] lg:px-[90px] mb-[90px]">
          <li className="justify-center  bg-violet-400 rounded-2xl w-[350px] h-[450px] overflow-hidden">
            <Image
              src="/image/Снимок экрана 2025-07-18 210350.png"
              width={350}
              height={200}
              className="h-[350px] rounded-t-2xl overflow-hidden  "
              alt="photo project"
            />

            <div className="flex items-center">
              <div>
                <h3 className="pt-2 pl-2 text-white font-bold">
                  Image Gallery / JS,HTML,CSS
                </h3>
                <p className=" text-black text-sm pt-1 pl-2">
                  A gallery where you can type the name of a picture you want to
                  find.
                </p>
              </div>
              <a
                href="https://github.com/AnastasiaSaienko634/goit-js-hw-12"
                className="ml-auto mt-5 mr-4 w-[25px] h-[25px] cursor-pointerr"
              >
                <GoArrowUpRight className=" w-[25px] h-[25px]" />
              </a>
            </div>
          </li>
          <li className="justify-center  bg-violet-400   rounded-2xl w-[350px]  h-[450px]">
            <Image
              src="/image/Снимок экрана 2025-07-18 210228.png"
              width={350}
              height={200}
              className="h-[350px] rounded-t-2xl  "
              alt="photo project"
            />
            <div className="flex items-center">
              <div>
                <h3 className="pt-2 pl-2 text-white font-bold">
                  Contact Book / React,JS,CSS
                </h3>
                <p className="text-black pt-1 text-sm pl-2">
                  A contact book where you can view and add your contacts, also
                  with sing up system.
                </p>
              </div>
              <a
                href="https://github.com/AnastasiaSaienko634/goit-react-hw-08"
                className="ml-auto mt-5 mr-4 w-[25px] h-[25px] cursor-pointerr"
              >
                <GoArrowUpRight className=" w-[25px] h-[25px]" />
              </a>
            </div>
          </li>
          <li className="justify-center  bg-violet-400   rounded-2xl w-[350px]  h-[450px]">
            <Image
              src="/image/Снимок экрана 2025-07-18 210147.png"
              width={350}
              height={200}
              className="h-[350px] rounded-t-2xl  "
              alt="photo project"
            />
            <div className="flex items-center">
              <div>
                <h3 className="pt-2 pl-2 text-white font-bold">
                  Virtual Wallet / Tailwind css
                </h3>
                <p className="text-white text-sm pl-2">
                  In this project, I styled the virtual wallet using Tailwind
                  CSS.
                </p>
              </div>
              <a
                href="https://github.com/AnastasiaSaienko634/pet-project-with-taiwilindcss"
                className="ml-auto mt-2 mr-4 w-[25px] h-[25px] cursor-pointerr"
              >
                <GoArrowUpRight className="w-[25px] h-[25px]" />
              </a>
            </div>
          </li>
          <li className="justify-center  bg-violet-400   rounded-2xl w-[350px]  h-[450px]">
            <Image
              src=""
              width={350}
              height={200}
              className="h-[350px] rounded-t-2xl  "
              alt="photo project"
            />
            <div className="flex items-center">
              <div>
                <h3 className="pt-2 pl-2 text-white font-bold">Soon</h3>
                <p className="text-white text-sm pl-2"></p>
              </div>
              <a
                href="asS"
                className="ml-auto mt-2 mr-4 w-[25px] h-[25px] cursor-pointerr"
              >
                <GoArrowUpRight className="w-[25px] h-[25px]" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
