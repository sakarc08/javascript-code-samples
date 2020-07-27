/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3402/
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10) return num 
    return !(num%9) ? 9 : num%9
};