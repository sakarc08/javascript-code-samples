/*
    https://leetcode.com/problems/isomorphic-strings/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (!s.length) return true;
  let obj2 = {},
    obj3 = {};
  for (let i = 0; i < s.length; i++) {
    if (obj3[s[i]] && obj3[s[i]] !== t[i]) return false;
    if (obj2[t[i]] && obj2[t[i]] !== s[i]) return false;
    obj2[t[i]] = s[i];
    obj3[s[i]] = t[i];
  }

  return true;
};
