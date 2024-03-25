// 147. Insertion Sort
// https://leetcode.com/problems/insertion-sort

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  return null;
}

function insertionSortPureJS(data: number[]): number[] {
  // iterate over each element in the array, starting at 1
  iLoop: for (let i = 1; i < data.length; i++) {
    // "pull out" the value at i
    const iValue = data[i];
    // look at the values to the left of i, if they are greater than i, then shift them along by one
    // when we find the first value to the left of i, which is not greater than iValue,
    // we can stop the search because everything to the left is now sorted
    jLoop: for (let j = i - 1; j >= 0; j--) {
      const jValue = data[j];
      if (jValue > iValue) {
        data[j + 1] = jValue;
      } else {
        // place iValue in the gap that has been created for it
        data[j + 1] = iValue;
        break jLoop;
      }
      if (j === 0) {
        data[j] = iValue;
      }
    }
  }

  return data;
}
/**
 * Test
 */
describe("147. Insertion Sort Pure JS", () => {
  it("should return sorted array when the array is not sorted", () => {
    const input = [4, 2, 1, 3];
    const output = [1, 2, 3, 4];
    expect(insertionSortPureJS(input)).toEqual(output);
  });

  it("should return sorted array when the array is sorted", () => {
    const input = [-1, 5, 3, 4, 0];
    const output = [-1, 0, 3, 4, 5];
    expect(insertionSortPureJS(input)).toEqual(output);
  });
});
describe.skip("147. Insertion Sort (Leetcode linked list)", () => {
  it("should return sorted list when the list is not sorted", () => {
    const input = new ListNode(
      4,
      new ListNode(2, new ListNode(1, new ListNode(3))),
    );
    const output = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4))),
    );
    expect(insertionSortList(input)).toEqual(output);
  });

  it("should return sorted list when the list is sorted", () => {
    const input = new ListNode(
      -1,
      new ListNode(0, new ListNode(3, new ListNode(4, new ListNode(5)))),
    );
    expect(insertionSortList(input)).toEqual(input);
  });
});

// Make this file a module to avoid global scoping
export {};
