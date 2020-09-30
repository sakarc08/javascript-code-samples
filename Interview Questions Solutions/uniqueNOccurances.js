/*
    https://leetcode.com/problems/unique-number-of-occurrences/submissions/
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occurances = {}
    arr.forEach(item => occurances[item] ? occurances[item]++ : occurances[item] = 1)
    let values = Object.values(occurances)
    occurances={}
    for(let i=0;i<values.length;i++){
        if(occurances[values[i]]) return false
        occurances[values[i]] = 1
    }
    return true
};