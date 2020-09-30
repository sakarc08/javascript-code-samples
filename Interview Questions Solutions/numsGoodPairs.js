/*
    https://leetcode.com/problems/number-of-good-pairs/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let tracker = {}, count=0
    nums.forEach(item => !tracker[item] ? tracker[item] = 1 : tracker[item]++)
    Object.keys(tracker).forEach(item => {
        let num = tracker[item]
        if(num>=2) count= count+(num*(num-1))/2
    })
    return count
}