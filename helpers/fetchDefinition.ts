async function fetchDefinition(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) return undefined;

  const data = await res.json();
  const searchedWord: Word = data[0];

  return searchedWord;
}

export default fetchDefinition;
