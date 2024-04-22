// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree

import { number } from "yargs";

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}
/**
 * Test
 */
describe("700. Search in a Binary Search Tree", () => {
  it("should return the node with the given value", () => {
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7),
    );
    const val = 2;
    const output = searchBST(root, val);
    expect(output).toEqual(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
  });

  it("should return null if the node with the given value does not exist", () => {
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7),
    );
    const val = 5;
    const output = searchBST(root, val);
    expect(output).toBeNull();
  });

  it("should return null if the tree is empty", () => {
    const root = null;
    const val = 1;
    const output = searchBST(root, val);
    expect(output).toBeNull();
  });
});

// Make this file a module to avoid global scoping
export {};
