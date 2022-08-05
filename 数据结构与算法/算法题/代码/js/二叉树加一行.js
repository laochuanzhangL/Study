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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function (root, val, depth) {
    if (depth == 1 || depth == 0) {
      let newNode=new TreeNode(val)
      if (depth == 1) {
        newNode.left = root
      } else {
        newNode.right = root
      }
      return newNode
    }
    if (root && depth > 1) {
      root.left = addOneRow(root.left, val, depth > 2 ? depth - 1 : 1)
      root.right = addOneRow(root.right, val, depth  > 2 ? depth - 1 : 0)
    }
    return root
  }