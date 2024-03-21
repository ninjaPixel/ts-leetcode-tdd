// 80. Remove Duplicates from Sorted Array II
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

/**
 * Solve
 */
function removeDuplicates(nums: number[]): number {
  let shift = 0;
  if (nums.length > 2) {
    for (let i = 2; i < nums.length; i++) {
      const current = nums[i];
      // get the prev values, bearing in mind that they may have been shifted already, so need to take that into account
      const prev1 = nums[i - 1 - shift];
      const prev2 = nums[i - 2 - shift];
      // increase shift if the prev 2 values are the same as the current
      if (current === prev1 && current === prev2) {
        shift++;
      } else {
        if (shift > 0) {
          // shift the current number down
          nums[i - shift] = nums[i];
        }
      }
    }
  }
  return nums.length - shift;
}

/**
 * Test
 */
describe("80. Remove Duplicates from Sorted Array II", () => {
  it("should return the correct number of unique elements and modify the array in-place", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = removeDuplicates(nums);
    expect(k).toEqual(5);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  it("should handle larger arrays with multiple duplicates", () => {
    const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const k2 = removeDuplicates(nums2);
    expect(k2).toEqual(7);
    expect(nums2.slice(0, k2)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  it("3", () => {
    const nums = [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3];
    const k = removeDuplicates(nums);
    expect(k).toEqual(6);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
  });
  it("4", () => {
    const nums2 = [1, 1, 1, 2, 2, 2, 3, 3];
    const k2 = removeDuplicates(nums2);
    expect(nums2.slice(0, k2)).toEqual([1, 1, 2, 2, 3, 3]);
    expect(k2).toEqual(6);
  });
});

// Make this file a module to avoid global scoping
export {};
