/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3392/
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(!n) return 1
    let flag = n%2 == 0, result = null
    function calculateSum(x,n) {
        let sum= n%2 == 0 ? 1 : x
        n=Math.floor(n/2);
        while(n>0) {
            sum*=x
            n-=1
        }
        result = sum*(sum)
        return flag ? result : result/x;
    }
    
    return n < 0 ?  1/calculateSum(x, Math.abs(n)) : calculateSum(x, n);
};