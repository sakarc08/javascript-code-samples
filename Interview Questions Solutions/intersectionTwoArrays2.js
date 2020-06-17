/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/674/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [], map={};
    
    nums1.forEach(item => {
        if(map[item]) {
            map[item]++;
        } else map[item] = 1
    })
    
    nums2.forEach(item => {
        if(map[item]) {
            result.push(item);
            map[item]--
        }
    })
    
    return result
};