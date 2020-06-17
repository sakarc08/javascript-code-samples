/*
    https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3369/
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

var countNodes = function(root) {
    let count = 0;
    
    function traverse(root) {
        if(!root) return 0
        count++
        if(root.left) traverse(root.left)
        if(root.right) traverse(root.right)
        return count;
    }
    return traverse(root);
};