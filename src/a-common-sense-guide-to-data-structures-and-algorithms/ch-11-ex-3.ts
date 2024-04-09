/**
 * There is a numerical sequence known as Triangular Numbers. The pattern begins as 1,3,6,10,15,21 and continues
 * onward with the Nth number in the pattern, which is N plus the previous number.
 * For example, the 7th number in the sequence is 28 since it's
 * 7 (which is N) plus 21 (the previous number in the sequence).
 * @param number
 */
function triangularNumbers(number: number): number {
  if (number < 1) {
    throw new RangeError("The input must be GTE 1");
  }
  if (number === 1) {
    return 1;
  }

  return number + triangularNumbers(number - 1);
}

describe("triangularNumbers function", () => {
  it("should return 1 for the first number in the sequence", () => {
    const input = 1;
    const output = triangularNumbers(input);
    expect(output).toBe(1);
  });

  it("should return 3 for the second number in the sequence", () => {
    const input = 2;
    const output = triangularNumbers(input);
    expect(output).toBe(3);
  });

  it("should return 6 for the third number in the sequence", () => {
    const input = 3;
    const output = triangularNumbers(input);
    expect(output).toBe(6);
  });

  it("should return 10 for the fourth number in the sequence", () => {
    const input = 4;
    const output = triangularNumbers(input);
    expect(output).toBe(10);
  });

  it("should return 15 for the fifth number in the sequence", () => {
    const input = 5;
    const output = triangularNumbers(input);
    expect(output).toBe(15);
  });

  it("should return 21 for the sixth number in the sequence", () => {
    const input = 6;
    const output = triangularNumbers(input);
    expect(output).toBe(21);
  });

  it("should return 28 for the seventh number in the sequence", () => {
    const input = 7;
    const output = triangularNumbers(input);
    expect(output).toBe(28);
  });
});
