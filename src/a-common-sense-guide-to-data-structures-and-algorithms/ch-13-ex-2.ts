/*
The following function finds the "missing number" from an array of intergers.
That is, the array is expected to have all integers from 0 up to the  array's length,
but one is missing. As examples, the array. [5,2,4,1,0] is missing the number 3,
and the array [9,3,2,5,6,7,1,0.4] is missing the number 8.
 */
function missingNumber(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1 && nums[0] === 0) {
    return 1;
  }
  if (nums.length === 1 && nums[0] === 1) {
    return 0;
  }

  const sorted = [...nums].sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < sorted.length; i++) {
    const value = sorted[i];
    if (value !== i) {
      return i;
    }
  }
  return -1;
}

describe("missingNumber function", () => {
  it("should return the correct missing number when the array has more than one number", () => {
    const input = [5, 2, 4, 1, 0];
    const output = missingNumber(input);
    expect(output).toBe(3);
  });

  it("should return the correct missing number when the array has more than one number", () => {
    const input = [9, 3, 2, 5, 6, 7, 1, 0, 4];
    const output = missingNumber(input);
    expect(output).toBe(8);
  });

  it("should return 0 when the array has only one number and it is 1", () => {
    const input = [1];
    const output = missingNumber(input);
    expect(output).toBe(0);
  });

  it("should return 1 when the array has only one number and it is 0", () => {
    const input = [0];
    const output = missingNumber(input);
    expect(output).toBe(1);
  });

  it("should return 0 when the array is empty", () => {
    const input: number[] = [];
    const output = missingNumber(input);
    expect(output).toBe(0);
  });
});
