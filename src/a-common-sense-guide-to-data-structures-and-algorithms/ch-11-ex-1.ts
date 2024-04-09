/*
The function accepts an array of strings and returns the total number of chars in the input.
For example if the input is ["ab", "c", "def", "ghij"] the output should be 10.
 */
function main(input: string[]): number {
  const finalString = input.pop();
  if (!finalString) {
    return 0;
  }
  return finalString?.length + main(input);
}

describe("main function", () => {
  it("should return the total number of characters in the array", () => {
    const input = ["ab", "c", "def", "ghij"];
    const output = main(input);
    expect(output).toBe(10);
  });

  it("should return 0 if the array is empty", () => {
    const input: string[] = [];
    const output = main(input);
    expect(output).toBe(0);
  });

  it("should return the correct count when the array has one string", () => {
    const input = ["hello"];
    const output = main(input);
    expect(output).toBe(5);
  });
});
