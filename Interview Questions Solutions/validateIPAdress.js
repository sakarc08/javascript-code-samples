/*
    https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3362/
*/


/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    let v4 = IP.split(".")
    let v6 = IP.split(":")
    let flag = true, regex = /^[a-fA-F0-9]+$/i, regexipv4 = /[a-z]+/i;
    if(v4.length == 4) {
        v4.every(item => {
            if(!item.length || regexipv4.test(item) || item.includes('-') || parseInt(item) > 255 || parseInt(item) < 0 || (item.length > 1 && item.indexOf(0) == 0)){
                flag = false
            }
            return flag
        })
        if(flag) return 'IPv4'
    } else if (v6.length == 8) {
        v6.every(item => {
            console.log(item)
            if(!(item.length > 0 && item.length < 5) || !regex.test(item)) {
                flag = false
            }
            return flag
        })
        
        if(flag) return 'IPv6'
    } else {
        flag = false
    }
    
    if(!flag) {
        return "Neither"
    }
};