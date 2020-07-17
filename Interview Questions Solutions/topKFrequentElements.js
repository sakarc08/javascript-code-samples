/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3393/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}
    nums.forEach((item, index) => {
        if(obj[item]) obj[item]++
        else obj[item] = 1
    })
    return Object.keys(obj).sort((a,b) => obj[b] - obj[a]).slice(0,k)
};