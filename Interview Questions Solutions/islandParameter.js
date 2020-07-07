/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3383
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count=0;
    
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] == 1) {
                count+=4
                if(i+1<grid.length && grid[i+1][j] == 1) count-=1
                if(i-1>=0 && grid[i-1][j] == 1) count-=1
                if(j+1<grid[0].length && grid[i][j+1] == 1) count-=1
                if(j-1>=0 && grid[i][j-1] == 1) count-=1
            }
        }
    }
    return count
};