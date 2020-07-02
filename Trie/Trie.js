const util = require('util' )
class Node {
    constructor(value) {
        this.value = value;
        this.end = false
        this.children = {}
    }
}

class CreateTrie {
    constructor() {
        this.root = new Node('-')
        
    }
    
    addNode(word) {
        let root = this.root
        for(let i=0; i<word.length; i++) {
            const newNode = new Node(word[i])
            // console.log(root)
            if(!root.children[word[i]]) {
                root.children[newNode.value] = newNode
                // console.log(root.children)
                // root = root.children[word[i]]
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
var findWords = function() {
    let words =  ["oath","pea","eat","oamr", "rain"]
    const Trie = new CreateTrie();
    words.forEach(item => {
       Trie.addNode(item)
    })
    console.log(util.inspect(Trie, {showHidden: false, depth: null}))
    // console.log(Trie.root)
};

findWords()