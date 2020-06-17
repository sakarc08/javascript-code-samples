/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    nums.forEach(item => {
        if(map[item]) {
            map[item]++;
        } else map[item] = 1
    })
    
    for(x in map) {
        if(map[x]%2 !== 0) break;
    }
    
    return x;
};