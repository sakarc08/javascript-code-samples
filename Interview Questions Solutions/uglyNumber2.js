/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3380/
*/


/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let two=0,three=0, five=0, arr=[]
    arr.push(1)
    
    while(arr.length < n) {
        let m2 = arr[two]*2;
        let m3 = arr[three]*3;
        let m5 = arr[five]*5;
 
        let min = Math.min(m2, Math.min(m3, m5));
        arr.push(min);
 
        if(min==m2)
            two++;
 
        if(min==m3)
            three++;
 
        if(min==m5)
            five++;
    }
    
    return arr[arr.length-1]
};