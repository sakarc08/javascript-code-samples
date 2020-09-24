/*
    https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0, end=s.length-1, vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'], newStr = s.split('')
    while(start<end) {
        if(vowels.includes(newStr[start]) && vowels.includes(newStr[end])) {
            let temp = newStr[start];
            newStr[start] = newStr[end]
            newStr[end] = temp
            start++
            end--
        } else if(!vowels.includes(newStr[start]) && vowels.includes(newStr[end])) {
            start++
        } else end--
    }
    return newStr.join('')
};