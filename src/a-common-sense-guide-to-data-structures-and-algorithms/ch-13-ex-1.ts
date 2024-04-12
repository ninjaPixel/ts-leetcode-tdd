/*
 Given an array of positive numbers, this function returns the greatest product of any three numbers.
 */
function greatest3Product(array: number[]): number {
  if (array.length < 3) {
    return 0;
  }

  array.sort((a, b) => (a < b ? -1 : 1)).reverse();
  return array[0] * array[1] * array[2];
}

describe("greatest3Product function", () => {
  it("should return the correct product when the array has more than three numbers", () => {
    const input = [3, 4, 1, 2, 5];
    const output = greatest3Product(input);
    expect(output).toBe(60); // 3*4*5 = 60
  });

  it("should return the product of all numbers when the array has only three numbers", () => {
    const input = [2, 4, 3];
    const output = greatest3Product(input);
    expect(output).toBe(24); // 2*3*4 = 24
  });

  it("should return 0 when the array has less than three numbers", () => {
    const input = [2, 3];
    const output = greatest3Product(input);
    expect(output).toBe(0);
  });
});
