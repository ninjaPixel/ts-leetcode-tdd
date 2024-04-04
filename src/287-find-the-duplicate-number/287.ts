// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number

function findDuplicate(nums: number[]): number {
  const indexMap: Record<number, number> = {};
  let result = 0;
  nums.forEach((num) => {
    const numCount = (indexMap[num] || 0) + 1;
    if (numCount > 1) {
      result = num;
      return;
    }
    indexMap[num] = numCount;
  });
  return result;
}

/**
 * Test
 */
describe("287. Find the Duplicate Number", () => {
  it("should return the duplicate number when the array has one duplicate", () => {
    const nums = [1, 3, 4, 2, 2];
    const output = 2;
    expect(findDuplicate(nums)).toEqual(output);
  });

  it("should return the duplicate number when the duplicate appears more than twice", () => {
    const nums = [3, 1, 3, 4, 2];
    const output = 3;
    expect(findDuplicate(nums)).toEqual(output);
  });

  it("should return the duplicate number when all elements are the same", () => {
    const nums = [3, 3, 3, 3, 3];
    const output = 3;
    expect(findDuplicate(nums)).toEqual(output);
  });
});
// Make this file a module to avoid global scoping
export {};
