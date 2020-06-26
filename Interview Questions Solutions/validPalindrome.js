/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/883/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s.length) return true
    let start = 0, end=s.length-1, flag = true, startChar=null, endChar = null;
    while(start <= end) {
        startChar = s.charCodeAt(start)
        endChar = s.charCodeAt(end)
        if( (startChar >=32 && startChar<=47) || (startChar >=58 && startChar<=64) || (startChar >=91 && startChar<=96) || (startChar >=123 && startChar<=126) || startChar >= 127){
            start++
            continue;
        }
        else if( (endChar >=32 && endChar<=47) || (endChar >=58 && endChar<=64) || (endChar >=91 && endChar<=96) || (endChar >=123 && endChar<=126) || endChar >= 127){
            end--
            continue;
        }
       
        if(s[start].toLowerCase() == s[end].toLowerCase()) {
            start++;
            end--;
        } else{
            return false   
        }
    }
    
    return true
};