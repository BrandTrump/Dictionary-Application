"use client";
import fetchDefinition from "@/helpers/fetchDefinition";
import { useFontStore } from "@/store/FontStore";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    word: string;
  };
};

async function DefinitionPage({ params: { word } }: Props) {
  const font = useFontStore((state) => state.font);
  const data = await fetchDefinition(word);

  if (!data) {
    notFound();
  }

  return (
    <div className={`space-y-5 font-${font}`}>
      <div className="space-y-2 md:flex md:justify-between md:items-center">
        <div className="space-y-2">
          <h1 className="text-5xl capitalize">{data.word}</h1>
          <h2 className="text-fuchsia-600 font-bold">{data.phonetic}</h2>
        </div>
        {data.phonetics.map((phontic, index) => (
          <div key={index} className="flex justify-center ">
            {phontic.audio ? (
              <audio controls src={phontic.audio}>
                This browser does not support this file
              </audio>
            ) : null}
          </div>
        ))}
      </div>
      {data.meanings.map((meaning, index) => (
        <div key={index}>
          <div className="flex items-center space-x-5 mb-5">
            <p className="italic font-bold flex-shrink">
              {meaning.partOfSpeech}
            </p>
            <hr className="h-px bg-gray-200 border-0 flex-grow"></hr>
          </div>
          <p className="text-slate-500 mb-4">Meaning</p>
          <ul
            role="list"
            className="marker:text-fuchsia-600 list-disc pl-10 space-y-3 "
          >
            {meaning.definitions.map((definition, index) => (
              <li key={index}>
                {definition.definition}
                <p className="text-slate-500">
                  {definition?.example ? `"${definition!.example}"` : null}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 inline-flex space-x-6">
            <p className="text-slate-500">
              {meaning.synonyms.length === 0 ? null : "Synonyms"}{" "}
            </p>
            <p className="text-fuchsia-600 font-bold">
              {meaning.synonyms.join(", ")}
            </p>
          </div>
        </div>
      ))}
      <hr className="h-px bg-gray-200 border-0"></hr>

      <div className="md:inline-flex md:space-x-4 max-w-10">
        <p className="text-slate-500">Source</p>
        <div className="flex items-center space-x-2 ">
          <Link
            as={data.sourceUrls[0]}
            href={data.sourceUrls[0]}
            className="underline truncate"
          >
            {data.sourceUrls}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="min-w-[1rem] h-4  text-slate-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DefinitionPage;
