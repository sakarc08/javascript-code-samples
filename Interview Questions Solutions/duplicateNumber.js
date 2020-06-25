/*
    https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3371/
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = {}
    
    for(let i=0; i<=nums.length;i++){
        if(map[nums[i]]) return nums[i]
        else map[nums[i]] = 1
    }
    
};