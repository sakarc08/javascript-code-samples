/*
    https://leetcode.com/problems/4sum/submissions/
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a-b)
    let result = [];
    for(let i=0; i<nums.length-2;i++) {
        if(nums[i] == nums[i-1]) continue;
        let start= i+1, end=nums.length-1, marker={}
        let currentTarget = target - nums[i] 
        while(start<end){
            let pivot = start+1, pivotMarker={};
            if(marker[nums[start]]){
                 start++
                end=nums.length-1
                continue;
            }    
            while(pivot<end) {
                let currentSum = nums[start] + nums[end];
                if(currentSum + nums[pivot] == currentTarget) {
                    if(pivotMarker[nums[pivot]]) {
                        pivot++
                        continue;
                    }
                    result.push([nums[i], nums[start], nums[pivot], nums[end]])
                    pivotMarker[nums[pivot]] = true
                    pivot++;
                } 
                else if(currentSum + nums[pivot] > currentTarget) {
                    end--
                } 
                else pivot++
            }
            marker[nums[start]] = true
            start++
            end=nums.length-1
        }
        marker={}
    }
    return result
};