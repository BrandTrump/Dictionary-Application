import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import FontSelector from "./FontSelector";

function Heading() {
  return (
    <div className={`flex justify-between items-center mb-8`}>
      <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 38"
          className="w-11 h-11 text-gray-500"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </Link>

      <div className="flex divide-x-2 items-center">
        <div className="pr-4 ">
          <FontSelector />
        </div>

        <div className="flex items-center space-x-3 pl-4">
          <DarkModeToggle />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 text-gray-500 cursor-pointer dark:text-fuchsia-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Heading;
