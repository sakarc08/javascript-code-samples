/*
    https://leetcode.com/problems/3sum-closest/submissions/

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length ==3) return nums.reduce((a,b) => a+b)
    let start=0, end=nums.length-1, closest=Infinity
    nums = nums.sort((a,b) => a-b)
    while(start<end-1) {
        // if(start > 0 && nums[start] == nums[start-1]) continue;
        let pivot=start+1, pivotEnd = end
        for(;pivot<pivotEnd;) {
            let currentSum = nums[start] + nums[pivotEnd] + nums[pivot];
            if(currentSum == target) return currentSum
            closest = Math.abs(target - closest) > Math.abs(target - currentSum) ? currentSum : closest
            if(currentSum<target) pivot++
            else pivotEnd--
        }
        start++
    }
    return closest
};