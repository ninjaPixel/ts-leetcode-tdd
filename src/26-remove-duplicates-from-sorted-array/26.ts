// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * Solve
 */
type UniqueElementCount = number;
/*
 Modifies nums in place.
 Nums is already sorted, in non-decreasing order.
 */
function removeDuplicates(nums: number[]): UniqueElementCount {
  let shift = 0;
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        shift++;
      } else {
        nums[i - shift] = nums[i];
      }
    }
  }
  return nums.length - shift;
}
/**
 * Test
 * The judge will test your solution with the following code:
 *
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 *
 * int k = removeDuplicates(nums); // Calls your implementation
 *
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 * assert nums[i] == expectedNums[i];
 * }
 * If all assertions pass, then your solution will be accepted.
 */
describe("26. Remove Duplicates from Sorted Array", () => {
  it("example 1", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toEqual(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });
  it("example 2", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toEqual(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });
});

// Make this file a module to avoid global scoping
export {};
