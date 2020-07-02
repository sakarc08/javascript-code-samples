/*
    https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/543/week-5-june-29th-june-30th/3376/
*/


class Node {
    constructor(value) {
        this.value = value;
        this.end = false
        this.children = {}
    }
}

/*
    Create a trie DS and add nodes to it
*/
class CreateTrie {
    constructor() {
        this.root = new Node('-')
    }
    
    addNode(word) {
        let root = this.root
        for(let i=0; i<word.length; i++) {
            const newNode = new Node(word[i])
            if(!root.children[word[i]]) {
                root.children[newNode.value] = newNode
            } 
            root = root.children[word[i]]
        }
        root.end = true
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let arr = [];
    const Trie = new CreateTrie();
    words.forEach(item => {
       Trie.addNode(item)
    })
    
    function find(row, column, arr, root, word) {
        if(row<0 || column<0 || row>=board.length || column>=board[0].length || board[row][column] == 'X') return;
        if(root.children[board[row][column]]) {
            root = root.children[board[row][column]]
            word+=root.value
            if(root.end) {
                arr.indexOf(word) == -1 ? arr.push(word) : null
            }
            let temp = board[row][column]
            board[row][column] = 'X' // for restricting usage of already visited index value
            find(row+1, column,arr, root, word) // this and the 3 lines below to search next character in surrounding values
            find(row, column+1,arr, root, word)
            find(row, column-1,arr, root, word)
            find(row-1, column,arr, root, word)
            board[row][column] = temp; // remove X and again put back the original value
            return arr
            
        } else return
    }
    
    for(let i =0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            let root = Trie.root;
            find(i, j, arr, root, '')
        }
    }
    return arr
};