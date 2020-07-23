/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3398/
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
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let count=1, result=[[root.val]], queue=[[root]];
    while(queue.length) {
        let temp=queue.shift();
        let queryCount= 0, arr=[], arr2=[]
        while(queryCount<temp.length){
            console.log('count ',count)
            if(count%2 ==0 ) {
                temp[queryCount].left && arr.push(temp[queryCount].left.val)
                temp[queryCount].right && arr.push(temp[queryCount].right.val)
            } else {
                temp[temp.length-queryCount-1].right && arr.push(temp[temp.length-queryCount-1].right.val)
                temp[temp.length-queryCount-1].left && arr.push(temp[temp.length-queryCount-1].left.val)
            }
            temp[queryCount].left && arr2.push(temp[queryCount].left)
            temp[queryCount].right && arr2.push(temp[queryCount].right)
            queryCount++
            
        }
        count++
        arr.length > 0 ? result.push(arr) : null
        arr2.length > 0 ? queue.push(arr2) : null
    }
    return result
}; 