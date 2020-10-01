/*
    https://leetcode.com/problems/contains-duplicate-ii/submissions/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let tracker = {}
    for(let i=0; i<nums.length;i++){
        if(nums[i] in tracker){
            if(i-tracker[nums[i]]<=k) return true
        }
        tracker[nums[i]] = i
    }
    return false
};