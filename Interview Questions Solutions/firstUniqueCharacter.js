/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/881/
*/



/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    for(let i=0; i< s.length;i++){
        if(map[s[i]]) map[s[i]]++
        else map[s[i]] = 1;
    }
    
    let minIndex = s.length - 1, temp=0, flag = false;
    for(x in map) {
        if(map[x] == 1) {
            flag = true
            temp = s.indexOf(x);
            minIndex = temp < minIndex ? temp : minIndex
        } 
    }
    
    return minIndex >=0 && flag ? minIndex : -1
};