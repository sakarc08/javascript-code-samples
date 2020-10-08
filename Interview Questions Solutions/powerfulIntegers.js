/*
     https://leetcode.com/problems/powerful-integers/
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let obj = {};
  for (let m = 1; m <= bound; m *= x) {
    for (let n = 1; m + n <= bound; n *= y) {
      obj[m + n] = 1;
      if (y == 1) break;
    }
    if (x == 1) break;
  }
  return Object.keys(obj);
};
