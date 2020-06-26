/*
    https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3372/
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
var sumNumbers = function(root) {
    if(!root) return 0
    let str = '', sum=0;
    function traverse(root, str) {
        let newstr = str.concat(root.val)
        if(!root.left && !root.right) {
            sum+=parseInt(newstr);
        }
        
        if(root.left) traverse(root.left, newstr)
        if(root.right) traverse(root.right, newstr)

        return sum;
    }
    
    return traverse(root, str)
};