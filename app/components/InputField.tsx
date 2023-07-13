"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function InputField() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/definition/${input}`);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center mb-6 justify-between space-x-3 cursor-pointer relative`}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for any word or phrase"
        className="bg-gray-200/50 text-gray-900 text-md rounded-2xl p-2.5 xl:w-96 flex-1 pl-8  dark:placeholder:text-white dark:bg-gray-500/50 dark:text-white hover:bg-gray-300/50 truncate focus:bg-gray-300/50 dark:focus:bg-gray-400/50 dark:hover:bg-gray-400/50"
      />
      <button type="submit" className="absolute right-0 px-6 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-fuchsia-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}

export default InputField;
