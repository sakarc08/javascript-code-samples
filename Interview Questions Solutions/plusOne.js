/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--) {
        if(digits[i]%10 == 9) {
            digits[i] = 0;
            // if(i>0) digits[i-1]++
        } else {
            digits[i]++
            break;
        }
    }

    let sum = digits.reduce((a,b) => a+b);
    if(!sum) digits.unshift(1);
    return digits
};