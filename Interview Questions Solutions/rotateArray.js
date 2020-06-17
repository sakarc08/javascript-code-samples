/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let l = 0;
    nums.reverse();
    nums = nums.slice(0, 3).reverse().concat(nums.slice(3,nums.length).reverse())
};