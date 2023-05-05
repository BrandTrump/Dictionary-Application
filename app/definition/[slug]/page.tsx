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
    <div>
      <h1 className="text-5xl">{data.word}</h1>
      <h2>{data.phonetic}</h2>
      {data.meanings.map((meaning, index) => (
        <div key={index}>
          <p>{meaning.partOfSpeech}</p>
          <ul>
            {meaning.definitions.map((definition, index) => (
              <li key={index}>{definition.definition}</li>
            ))}
          </ul>
          <p>
            Synonyms <span>{meaning.synonyms}</span>
          </p>
        </div>
      ))}
      <Link href={data.sourceUrls[0]}>{data.sourceUrls}</Link>
    </div>
  );
}

export default DefinitionPage;
