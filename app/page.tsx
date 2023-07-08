"use client";
import { useFontStore } from "@/store/FontStore";
import Link from "next/link";

export default function Home() {
  const font = useFontStore((state) => state.font);
  return (
    <div
      className={`flex flex-col justify-center items-center space-y-10 text-center mt-[45%] md:mt-[40%] font-${font}`}
    >
      <h1 className="text-3xl text-center mt-10">
        Frontend Mentor Challenge | Dictionary Word Application
      </h1>
      <Link
        href={"https://github.com/BrandTrump/Dictionary-Application"}
        className="text-xl underline"
      >
        GitHub Repo
      </Link>
    </div>
  );
}
