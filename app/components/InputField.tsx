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
      className="flex items-center mb-6 justify-between space-x-3 cursor-pointer"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-200/50 border-0 border-gray-300 text-gray-900 font-bold text-md rounded-2xl p-2.5 focus:outline-none xl:w-96 flex-1"
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-fuchsia-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}

export default InputField;
