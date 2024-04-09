/*
    The string "abc" has six anagrams: "abc", "bac", "cab", "acb", "bca", "cba"
    This anagrams function will return these 6 strings in an array
 */
function anagrams(input: string): string[] {
  if (input.length === 0) {
    return [""];
  }
  if (input.length === 1) {
    return [input];
  }
  if (input.length === 2) {
    const reverse = [...input].reverse().join("");
    return [input, reverse];
  }

  const finalLetter = input.slice(input.length - 1);
  const frontLetters = input.slice(0, input.length - 1);
  /*
      get the results of all anagrams before this one,
      create an array of letters for each anagram,
      make array one cell larger
      place the finalLetter in each cell, while shifting the other letters
   */
  const previousAnagrams = anagrams(frontLetters);
  const result: Set<string> = new Set();
  previousAnagrams.forEach((prevAnagram) => {
    for (
      let finalLetterIndex = 0;
      finalLetterIndex <= prevAnagram.length;
      finalLetterIndex++
    ) {
      const letterArray = [...prevAnagram];
      letterArray.splice(finalLetterIndex, 0, finalLetter);
      result.add(letterArray.join(""));
    }
  });

  return [...result];
}

describe("A Common Sense Guide to Data Structures and Algorithms - Chapter 11", () => {
  it("can can a two letter anagram", function () {
    const input = "ab";
    const output = ["ab", "ba"];
    expect(anagrams(input).sort()).toEqual(output.sort());
  });
  it("should return the number of anagrams when the string has multiple distinct characters", () => {
    const input = "abc";
    const output = ["abc", "acb", "bac", "bca", "cab", "cba"];
    expect(anagrams(input).sort()).toEqual(output.sort());
  });

  it("should return the number of anagrams when the string has all the same characters", () => {
    const input = "aaa";
    const output = ["aaa"];
    expect(anagrams(input)).toEqual(output);
  });

  it("should return the number of anagrams when the string is empty", () => {
    const input = "";
    const output = [""];
    expect(anagrams(input)).toEqual(output);
  });
});
