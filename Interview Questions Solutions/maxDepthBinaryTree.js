/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/555/
*/

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
var maxDepth = function(root) {
    function depth(root) {
        if(!root) return 0
        return 1+Math.max(depth(root.left), depth(root.right)) 
    }
    return depth(root)
};