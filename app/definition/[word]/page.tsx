import fetchDefinition from "@/helpers/fetchDefinition";
import Link from "next/link";

type Props = {
  params: {
    word: string;
  };
};

async function DefinitionPage({ params: { word } }: Props) {
  const data = await fetchDefinition(word);

  return (
    <div className="space-y-5">
      <div>
        <div>
          <h1 className="text-5xl capitalize">{data.word}</h1>
          <h2 className="text-fuchsia-600 font-bold">{data.phonetic}</h2>
        </div>
      </div>
      {data.meanings.map((meaning, index) => (
        <div key={index}>
          <p className="italic font-bold mb-5">{meaning.partOfSpeech}</p>
          <p className="text-slate-500">Meaning</p>
          <ul
            role="list"
            className="marker:text-fuchsia-600 list-disc pl-5 space-y-3"
          >
            {meaning.definitions.map((definition, index) => (
              <li key={index}>{definition.definition}</li>
            ))}
          </ul>
          <p className="text-slate-500">
            Synonyms{" "}
            <span className="text-fuchsia-600 font-bold">
              {meaning.synonyms}
            </span>
          </p>
        </div>
      ))}
      <p className="text-slate-500">Source</p>
      <Link href={data.sourceUrls[0]}>{data.sourceUrls}</Link>
    </div>
  );
}

export default DefinitionPage;
