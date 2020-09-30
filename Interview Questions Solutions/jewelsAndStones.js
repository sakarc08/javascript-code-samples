/*
    https://leetcode.com/problems/jewels-and-stones/
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count=0
    S.split('').forEach(item => J.includes(item) ? count++ : '')
    return count
};