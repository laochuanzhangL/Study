/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let maxWidth = 1n
  const leftIds = []
  const dfs = (root, level, currIdx) => {
    if (leftIds[level] === undefined) {
      leftIds[level] = currIdx
    } else {
      const width = currIdx - leftIds[level] + 1n
      maxWidth = maxWidth > width ? maxWidth : width
    }
    if (root.left) {
      dfs(root.left, level + 1, currIdx * 2n - 1n)
    }
    if (root.right) {
      dfs(root.right, level + 1, currIdx * 2n)
    }
  }
  dfs(root, 0, 1n)
  return maxWidth
}
