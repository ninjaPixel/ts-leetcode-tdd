/*
Page 131, question 4.
Write a function that returns the fist non-duplicated character in a string. For example, the string, "minimum"
has two characters that only exist once - the "n" and the "u",
so your function should return the "n", since it occurs first. The function should have an efficiency of O(N).
 */

function firstNonDuplicatedChar(str: string): string {
  const hashMap: Map<string, number> = new Map();
  const chars = Array.from(str);
  chars.forEach((char) => {
    let existingCount = 0;
    if (hashMap.get(char)) {
      existingCount = hashMap.get(char) as number;
    }
    const newCount = 1 + existingCount;
    hashMap.set(char, newCount);
  });

  let result = "";
  // note that JS objects don't guarantee order, should need to use a Map
  hashMap.forEach((value, key) => {
    if (value < 2 && !result) {
      result = key;
    }
  });

  return result;
}

describe("A Common Sense Guide to Data Structures and Algorithms - Chapter 8", () => {
  it("should return the first non-duplicated character when the string has non-duplicated characters", () => {
    const input = "minimum";
    const output = "n";
    expect(firstNonDuplicatedChar(input)).toEqual(output);
  });

  it("should return an empty string when the string has all duplicated characters", () => {
    const input = "aabbcc";
    const output = "";
    expect(firstNonDuplicatedChar(input)).toEqual(output);
  });
});
