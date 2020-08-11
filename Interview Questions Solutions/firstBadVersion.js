/*
  https://leetcode.com/explore/featured/card/top-interview-questions-easy/96/sorting-and-searching/774/
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        function search(start, end) {
            let mid = Math.floor((end-start)/2) + start
            if(isBadVersion(mid) && !isBadVersion(mid-1)) return mid
            else {
                if(isBadVersion(mid)) return search(1, mid)
                return search(mid+1, end)
            }
            
        }
        
        return search(1,n)
    };
};
