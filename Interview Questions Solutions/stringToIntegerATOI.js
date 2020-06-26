/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/884
*/


/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let pointer=0, end=0, flag = false;
    while(1){
        if(str[pointer] == ' '){
            if(flag) break
            pointer++
            end=pointer;
        } 
        
        else if(str[pointer] == '-' || str[pointer] == '+' || ( str.charCodeAt(pointer) >= 48 && str.charCodeAt(pointer) <= 57)) {
                end++;
            flag = true
        } 
        else return 0
        if(end>=str.length) break;
        
    }
    
    let max = parseInt(str.slice(pointer,end)) ? parseInt(str.slice(pointer,end)) : 0
    if(max > 0 && max >= Math.pow(2,31)) return Math.pow(2,31) - 1
    if(max < 0 && max <= Math.pow(-2,31)) return Math.pow(-2,31)
    
    return max
};