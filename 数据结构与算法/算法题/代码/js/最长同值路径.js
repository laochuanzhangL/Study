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
 var longestUnivaluePath = function(root) {
    if(root==null) return 0;
    let max=0
    const dfs=(root)=>{
        if(root==null) return 0;
        let left=dfs(root.left)
        let right=dfs(root.right)
        let leftLen=0,rightLen=0
        if(root.left&&root.left.val==root.val)
            leftLen=left+1
        if(root.right&&root.right.val==root.val)
            rightLen=right+1
        max=Math.max(max,leftLen+rightLen)
        return Math.max(leftLen,rightLen)
    }
    dfs(root)
    return max
};