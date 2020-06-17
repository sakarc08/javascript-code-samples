/*
    https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3363/
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(!board.length) return;
    let rows = board.length, columns = board[0].length
    function markSurounding(i, j) {
            if(board[i][j] == 'O') {
                board[i][j] = 'P'   
                i-1 > 0 ? markSurounding(i-1, j) : null
                i+1 < board.length ? markSurounding(i+1, j) : null
                j+1 < board[i].length ? markSurounding(i, j+1) : null
                j-1 > 0 ? markSurounding(i, j-1) : null
            }
            
    }
    
    for(let i=0; i< rows; i++) {
        if(board[i][0] == 'O' || board[i][columns -1] == 'O') {
            markSurounding(i, 0)
            markSurounding(i, columns-1)
        }
    }
    
    for(let j=0; j< columns; j++) {
        if(board[0][j] == 'O' || board[rows-1][j] == 'O') {
            markSurounding(0, j)
            markSurounding(rows-1, j)
        }
    }
    
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j] == 'P') {
                board[i][j] = 'O'
            } else board[i][j] = 'X'
        }
    }
};
