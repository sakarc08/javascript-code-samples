/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/567/
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i=0, j=1; j<nums.length;) {
        if(nums[i] !=0) {
            i++;
            j++;
            continue;
        }
        if(nums[j] != 0 && nums[i]==0) {
            // swap(i,j)
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }  
        j++
    }
};