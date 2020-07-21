/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3395/
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a=='0') return b
    if(b=='0') return a
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};