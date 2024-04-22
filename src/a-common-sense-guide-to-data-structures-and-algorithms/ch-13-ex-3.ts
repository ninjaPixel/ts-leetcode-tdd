/*
    This function finds the greatest number within an array.
 */
type FindGreatestFunc = (nums: [number, ...number[]]) => number;

// O(N^2)
const findGreatestNumberSlow: FindGreatestFunc = (nums) => {
  const one = nums[0];
  const three = nums[3];
  return -1;
};

// O(N log N)
const findGreatestNumberMedium: FindGreatestFunc = (nums) => {
  const result = nums.sort((a, b) => (a < b ? -1 : 1))[nums.length - 1];
  return result as number;
};

// O(N)
const findGreatestNumberFast: FindGreatestFunc = (nums) => {
  let max = nums[0];
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      if ((nums[i] as number) > max) {
        max = nums[i] as number;
      }
    }
  }

  return max;
};

describe("FindGreatestFunc functions", () => {
  const functions = [
    findGreatestNumberSlow,
    findGreatestNumberMedium,
    findGreatestNumberFast,
  ];
  const testCases = [
    { input: [1, 2, 3, 4, 5], expected: 5 },
    { input: [5, 4, 3, 2, 1], expected: 5 },
    { input: [2, 5, 3, 1, 4], expected: 5 },
    { input: [-1, -2, -3, -4, -5], expected: -1 },
    { input: [5], expected: 5 },
  ];

  functions.forEach((func, index) => {
    describe(`Function #${index + 1}`, () => {
      testCases.forEach((testCase, caseIndex) => {
        it(`should return the correct greatest number for test case #${caseIndex + 1}`, () => {
          const output = func(
            testCase.input as Parameters<FindGreatestFunc>[0],
          );
          expect(output).toBe(testCase.expected);
        });
      });
    });
  });
});
