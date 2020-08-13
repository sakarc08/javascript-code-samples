/*
  https://leetcode.com/explore/featured/card/top-interview-questions-easy/97/dynamic-programming/569/
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;
    let arr = [1,2,3];
    for (let i = 3; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr.pop();
};
