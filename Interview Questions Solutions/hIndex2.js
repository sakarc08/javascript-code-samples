/*
    https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3364/
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n=citations.length;
        let l=0, h=citations.length;
        while(l<h){
            let m=l+h>>>1;
            if(citations[m]==n-m)
                return n-m;
            else if(citations[m]<n-m){
                l=m+1;
            }else{
                h=m;
            }
        }
        return n-l;
};