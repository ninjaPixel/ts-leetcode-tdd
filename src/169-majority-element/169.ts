// 169. Majority Element
// https://leetcode.com/problems/majority-element

/**
 * Solve
 */
function majorityElement(nums: number[]): number {
  const cutoff = nums.length / 2;
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const currentCount = map.get(num) ?? 0;
    const newCount = currentCount + 1;
    if (newCount >= cutoff) {
      return num;
    }
    map.set(num, newCount);
  }
  return 0;
}

/**
 * Test
 */

describe("169. Majority Element", () => {
  it("should return the majority element in the array", () => {
    const nums = [3, 2, 3];
    const result = majorityElement(nums);
    expect(result).toEqual(3);
  });

  it("should handle larger arrays with multiple duplicates", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    expect(result).toEqual(2);
  });
});

// Make this file a module to avoid global scoping
export {};
