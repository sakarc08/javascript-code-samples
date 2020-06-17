/*
    https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3368/
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {}
    nums.forEach(item => {
        if(map[item]) {
            map[item]++;
        } else map[item] = 1
    })
    
    for(x in map) {
        if(map[x]%3 !== 0) break;
    }
    
    return x;
};