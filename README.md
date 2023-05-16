# Frontend Mentor - Dictionary Web App solution

This is a solution to the [Dictionary Web App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Learnings](#learnings)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- [React](https://reactjs.org/) - JS library
- [Next.js 13.4](https://nextjs.org/docs/getting-started) - React framework

### Learnings

- Next.js 13.4 data fetching: (https://nextjs.org/blog/next-13-4#nextjs-app-router).

```js
async function fetchDefinition(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const searchedWord: Word = data[0];

  return searchedWord;
}

export default fetchDefinition;
```

- notFound function: (https://nextjs.org/docs/app/api-reference/functions/not-found)

```js
const data = await fetchDefinition(word);

  if (!data) {
    notFound();
  }
  ```

- Serving a custom UI for when the notFound function is thrown within a route segment.

```js
export default function NotFound() {
  return (
    <div className="flex flex-col items-center space-y-10 mt-32 text-center">
      <h2 className="font-bold text-4xl uppercase">
        Sorry I Could&apos;t Find a Definition
      </h2>
      <p className="text-2xl">Please try search for another word or phrase.</p>
    </div>
  );
}
```

## Author

- Website - Brandon Trump (https://brandontrump.dev/)
