/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/631/
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {   
    function buildTree(arr) {
        if(!arr.length) return null
        let mid = Math.floor(arr.length/2)
        let root = new TreeNode(arr[mid])
        root.left = buildTree(arr.slice(0, mid))
        root.right = buildTree(arr.slice(mid+1))
        return root
    }
    
    
    return buildTree(nums)
}