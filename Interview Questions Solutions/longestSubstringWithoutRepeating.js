// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count=0, max=0, start=0, end=start, obj = {}
    while(end!=s.length) {
        if(!obj[s[end]]) {
            obj[s[end]] = end;
            end++;
            count++
        } else {
            max = Math.max(max, count);
            count=0;
            start++;
            end=start;
            obj = {};
        }
    }
    return max ? Math.max(max, count) : s.length
};