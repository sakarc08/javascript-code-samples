/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =0, j =0, map = {};
    
    function swap(a, b) {
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }
    
    while(i < nums.length) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1;
            if(i != 0) swap(i,j)
            i++;
            j++;
        } else {
            map[nums[i]]++;
            i++;
        }
    }
    
    return j;
};