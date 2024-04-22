// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree

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

function inOrderBST(
  root: TreeNode | null | undefined,
  result: Array<number> = [],
): Array<number> {
  if (!root) {
    return result;
  }
  // add left child to array
  inOrderBST(root?.left, result);

  // add self to array
  result.push(root.val);

  // add right child to array
  inOrderBST(root?.right, result);

  return result;
}

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const ordered = inOrderBST(root);

  for (let i = 1; i < ordered.length; i++) {
    if (ordered[i]! <= ordered[i - 1]!) {
      return false;
    }
  }
  return true;
}

// Make this file a module to avoid global scoping
export {};

describe("98. Validate Binary Search Tree", () => {
  it("should return true for a valid binary search tree", () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const output = isValidBST(root);
    expect(output).toBe(true);
  });

  it("should return false for an invalid binary search tree", () => {
    const root = new TreeNode(
      5,
      new TreeNode(4),
      new TreeNode(6, new TreeNode(3), new TreeNode(7)),
    );
    const output = isValidBST(root);
    expect(output).toBe(false);
  });

  it("should return true for a tree with a single node", () => {
    const root = new TreeNode(1);
    const output = isValidBST(root);
    expect(output).toBe(true);
  });

  it("should return true for an empty tree", () => {
    const root = null;
    const output = isValidBST(root);
    expect(output).toBe(true);
  });
});
