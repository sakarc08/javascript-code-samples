/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}, flag = false
    nums.every(item => {
        if(map[item]){ 
            flag = true
            return false
        }
        map[item] = 1
        return true
    })
    
    return flag
};