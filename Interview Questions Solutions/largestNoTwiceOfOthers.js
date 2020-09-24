/*
    https://leetcode.com/problems/largest-number-at-least-twice-of-others/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let arr = Object.assign([], nums)
    nums.sort((a,b) => a-b);
    let max = nums[nums.length-1], temp=0;
    while(temp < arr.length-1){
        if(max < 2*nums[temp]) return -1
        temp++;
    }
    return arr.indexOf(max)
};