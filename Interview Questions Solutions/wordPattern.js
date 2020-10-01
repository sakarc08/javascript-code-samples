/*
    https://leetcode.com/problems/word-pattern/
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let pSplit = pattern.split('')
    let strSplit = s.split(' ')
    if(pSplit.length != strSplit.length) return false
    
    let tracker = {}, coveredWords = []
    pSplit.forEach((item, index) => {
        if(!tracker[item] && !coveredWords.includes(strSplit[index])){
            tracker[item] = strSplit[index]
            coveredWords.push(strSplit[index])
        }
    })
    
    for(let i=0; i<pattern.length;i++) {
        if(tracker[pattern[i]] != strSplit[i]) return false
    }
    return true
};