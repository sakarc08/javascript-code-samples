/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/886/
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let temp='';
    function freqCounter(str) {
        let frequency=1, num=0, newStr=''
        if(str == '') {
            newStr='1'
            return newStr
        }
        for(let i=0, j=1; i<str.length ;){
            num=str[i]
            if(str[i] != str[j]) {
                i=j;
                j=j+1;
                newStr+=frequency+num
                frequency=1
            } else {
                j++;
                frequency = j-i
            }
        }
        return newStr
    }
    
    while(n>0) {
        temp = freqCounter(temp)
        n--
    }
    return temp
};