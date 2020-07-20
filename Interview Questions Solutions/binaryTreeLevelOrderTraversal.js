/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/628/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let result = [], result2 = [[root.val]];
    result.push(root)
    while(result.length) {
        let limit = result.length;
        let sample = []
        while(limit--) {
            let temp = result.shift();
            if(temp.left){
                result.push(temp.left)
                sample.push(temp.left.val)
            } 
            if(temp.right){
                result.push(temp.right)
                sample.push(temp.right.val)
            }
        }
        sample.length && result2.push(sample)
    }
    return result2
};