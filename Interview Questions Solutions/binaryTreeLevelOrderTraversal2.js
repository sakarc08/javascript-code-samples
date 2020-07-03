/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3378/
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
var levelOrderBottom = function(root) {
    if(!root) return []
    let result = []
    let traversed=[];
    traversed.push(root)
    
    while(traversed.length) {
        let size = traversed.length;
        let temp=[]
        for(let i =0; i<size; i++) {
            temp.push(traversed[i].val)
            if(traversed[i].left) traversed.push(traversed[i].left)
            if(traversed[i].right) traversed.push(traversed[i].right)
            
        }
        result.push(temp)
        traversed.splice(0,size);
    }
    return result.reverse()
};