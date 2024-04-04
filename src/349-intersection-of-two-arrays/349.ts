// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays

function intersection(nums1: number[], nums2: number[]): number[] {
  const indexMap: Record<number, boolean> = {};
  nums1.forEach((num) => {
    indexMap[num] = true;
  });

  const result: Set<number> = new Set();

  nums2.forEach((num2) => {
    if (indexMap[num2]) {
      result.add(num2);
    }
  });
  return Array.from(result);
}
/**
 * Test
 */

describe("349. Intersection of Two Arrays", () => {
  it("1", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const output = [2];
    expect(intersection(nums1, nums2)).toEqual(output);
  });

  it("2", () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const output = [9, 4];
    expect(intersection(nums1, nums2)).toEqual(output);
  });

  it("3", () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [0, 2, 4, 6, 8];
    const output = [2, 4];
    expect(intersection(nums1, nums2)).toEqual(output);
  });
});

// Make this file a module to avoid global scoping
export {};
