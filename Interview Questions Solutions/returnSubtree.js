/*
    https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3361/
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return null
    else {
        if(root.val === val) return root;
        else {
            let p;
            if(root.left) {
                p = searchBST(root.left, val)
            }
            if(!p && root.right) p = searchBST(root.right, val)
            return p ? p : null;
        }
    }
};