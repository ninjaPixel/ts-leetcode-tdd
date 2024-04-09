/**
 * A function that accepts a string and returns the first index that contains the character "x".
 * For example, the string "abxcd" has an "x" at index 2.
 * Assume the input definitely has at least one "x"
 * @param input
 */
function firstIndexOfX(input: string): number {
  return -1;
}

describe("firstIndexOfX function", () => {
  it('should return the correct index when the "x" is at the beginning of the string', () => {
    const input = "xabc";
    const output = firstIndexOfX(input);
    expect(output).toBe(0);
  });

  it('should return the correct index when the "x" is at the end of the string', () => {
    const input = "abcx";
    const output = firstIndexOfX(input);
    expect(output).toBe(3);
  });

  it('should return the correct index when the "x" is in the middle of the string', () => {
    const input = "abxc";
    const output = firstIndexOfX(input);
    expect(output).toBe(2);
  });

  it('should return the correct index when the string has multiple "x" characters', () => {
    const input = "abxxc";
    const output = firstIndexOfX(input);
    expect(output).toBe(2);
  });
});
