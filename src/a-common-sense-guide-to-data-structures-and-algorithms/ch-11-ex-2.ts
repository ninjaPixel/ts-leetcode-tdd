/**
 * @return an array of just the even numbers
 * @param input an array of numbers
 */
function justEvens(input: number[]): number[] {
  const tail = input.pop();
  if (tail === undefined) {
    return [];
  }
  const isEven = tail % 2 === 0;
  if (isEven) {
    return [tail, ...justEvens(input)];
  }
  return justEvens(input);
}

describe("justEvens function", () => {
  it("should return an array of even numbers when the input array has both even and odd numbers", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = justEvens(input);
    expect(output.sort()).toEqual([2, 4, 6].sort());
  });

  it("should return an empty array when the input array has only odd numbers", () => {
    const input = [1, 3, 5, 7, 9];
    const output = justEvens(input);
    expect(output).toEqual([]);
  });

  it("should return the same array when the input array has only even numbers", () => {
    const input = [2, 4, 6, 8, 10];
    const output = justEvens(input);
    expect(output.sort()).toEqual([2, 4, 6, 8, 10].sort());
  });

  it("should return an empty array when the input array is empty", () => {
    const input: number[] = [];
    const output = justEvens(input);
    expect(output).toEqual([]);
  });
});
