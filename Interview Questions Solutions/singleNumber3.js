/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3399/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj={};
    nums.forEach(item => {
        if(obj[item]) delete obj[item]
        else obj[item] = 1;
    })
    return Object.keys(obj)
};