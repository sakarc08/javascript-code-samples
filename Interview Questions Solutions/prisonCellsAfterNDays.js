/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3379/
*/

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */

var prisonAfterNDays = function(cells, N) {
    let count=0
    let prev = cells[0]
    function loop(N, prev, count) {
        for(let i =0; i<8; i++) {
            if(count == N) break;
            if(i ==0) {
                prev = cells[i]
                cells[i]=0
                continue
            } 
            if(i==7) {
                prev = cells[0]
                count++
                cells[i]=0
                i=0;
                continue
            }
            if(prev == cells[i+1]){
                prev = cells[i];
                cells[i] = 1
            } else {
                prev = cells[i];
                cells[i] = 0
            } 
        }
    }
    
    loop(14, prev, count)
    N=N%14
    loop(N, cells[0], 0)  
    return cells
};