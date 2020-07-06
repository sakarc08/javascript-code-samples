/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3381/
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // x^y is called XOR of 2 numbers.....for differnt bits it returns true, for same bit returns false
    // in this case those bits will become 1 which are different between x and y
    let num = x^y, count=0;
    
    // then we just have to count no. of bits which are 1
    while(num>0) {
        num&=num-1; // unsets the lowest bit which is true/1
        count++
    }
    
    return count
};