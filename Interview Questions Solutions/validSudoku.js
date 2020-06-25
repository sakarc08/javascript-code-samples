/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/769/
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let map = {};

    for(let row=0; row< 9; row++) {
        for(let column=0; column< 9; column++) {
            let number = board[row][column]
            if(number !== '.') {
                if(!map[`${number}(${row})`]) {
                    map[`${number}(${row})`] = true
                } else {
                    return false
                }
                if(!map[`(${column})${number}`]) map[`(${column})${number}`] = true
                else {
                    return false
                }
                if(!map[`${number}(${Math.floor(row/3)})-(${Math.floor(column/3)})`]) map[`${number}(${Math.floor(row/3)})-(${Math.floor(column/3)})`] = true
                
                else {
                    return false
                }
            }
        }
    }
    console.log(map)
    return true
};