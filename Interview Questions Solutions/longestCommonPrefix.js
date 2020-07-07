/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/887/
*/


class Node {
    constructor(value) {
        this.value=value;
        this.end = false;
        this.children = {}
    }
}

class Trie {
    constructor(){
        this.root = new Node('-');
    }

    addNode(word) {
        // if(!word) return
        let temp = this.root;
        for (let index = 0; index < word.length; index++) {
            const node = new Node(word[index]);
                if(!temp.children[word[index]]) {
                    temp.children[node.value] = node;
                }
                temp = temp.children[word[index]]
        }

        temp.end = true;
    }
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ""
    const trie = new Trie();
    for(let i=0; i<strs.length; i++){
        if(!strs[i]) return ''
        trie.addNode(strs[i]);
    }

    let str = '';
    function traverse(root) {
        if(root.value !== '-'){
            str+=root.value
            if(root.end) return
        }
        let children = Object.keys(root.children)
        if(children.length==1) {
            // console.log(root.value, str)
            traverse(root.children[children[0]])
        } else return
    }
    
    traverse(trie.root)
    return str
};