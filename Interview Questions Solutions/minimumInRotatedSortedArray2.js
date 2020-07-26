/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3401/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let flag=true, k=0;
    if(nums.length==1) return nums[0]
    while(1) {
        let last = nums[nums.length-1]
        let first = nums[0];
        if(k==nums.length-1 && !flag) break
        if(last<=first){
            nums.unshift(nums.pop())
            k++
            flag=false
        } else break
    }
    return nums[0]
};