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

Your users should be able to:

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

## Author

- Website - Brandon Trump (https://brandontrump.dev/)
