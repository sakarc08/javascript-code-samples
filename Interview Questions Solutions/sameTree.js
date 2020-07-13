/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3389/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true
    function traverse(p, q) {
        if(!p && !q) return true
        else if(!p || !q || p.val !== q.val) return false
        else {
            return traverse(p.left, q.left) && traverse(p.right, q.right)
        } 
    }  
    return traverse(p,q)
};