/*
    This function finds the greatest number within an array.
 */
type FindGreatestFunc = (nums: [number, ...number[]]) => number;

const findGreatestNumberSlow: FindGreatestFunc = (nums) => {
  const one = nums[0];
  const three = nums[3];
  return -1;
};

const findGreatestNumberMedium: FindGreatestFunc = (nums) => {
  const one = nums[0];
  const three = nums[3];
  return -1;
};

const findGreatestNumberFast: FindGreatestFunc = (nums) => {
  const one = nums[0];
  const three = nums[3];
  return -1;
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
