/*
Page 131, question 3.
Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter.
For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet
except the letter "f". Then function should have a time complexity of O(N).
 */
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function findMissingLetter(input: string): string {
  const alphabetHashMap: Record<string, boolean> = {};
  alphabet.forEach((letter) => {
    alphabetHashMap[letter] = false;
  });

  const lowerCaseInput = input.toLowerCase();
  Array.from(lowerCaseInput).forEach((letter) => {
    if (letter === " ") return;
    alphabetHashMap[letter] = true;
  });

  for (const record in alphabetHashMap) {
    if (alphabetHashMap[record] === false) {
      return record;
    }
  }
  return "";
}

describe("A Common Sense Guide to Data Structures and Algorithms - Chapter 8", () => {
  it("should return the missing letter when the string contains all the letters of the alphabet except one", () => {
    const input = "the quick brown box jumps over a lazy dog";
    const output = "f";
    expect(findMissingLetter(input)).toEqual(output);
  });

  it("should return an empty string when the string contains all the letters of the alphabet", () => {
    const input = "the quick brown fox jumps over a lazy dog";
    const output = "";
    expect(findMissingLetter(input)).toEqual(output);
  });
});
