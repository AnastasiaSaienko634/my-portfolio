"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="lg:flex sm:flex justify-center mt-[120px] ml-5 mx-auto gap-[5px]">
        <h1>404</h1>
        <p>Something is going wrong! Page not found.</p>
        <Link href="/" className="text-violet-300 underline">
          Go back on Home Page
        </Link>
      </div>
    </>
  );
}
