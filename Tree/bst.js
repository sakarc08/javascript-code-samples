class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left - null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if(!this.root) this.root = node;
        else {
            let current = this.root;
            while(true) {
                if(value < current.value) {
                    if(current.left) current = current.left;
                    else {
                        current.left = node;
                        break;
                    }
                }
                else if(value > current.value) {
                    if(current.right) current = current.right;
                    else {
                        current.right = node;
                        break;
                    }
                }
            }
        }
    }

    find(value) {
        if(!this.root) return 'No values in the tree';
        else {
            let current = this.root;
            if(current.value === value) return current;
            while(current.value !== value) {
                if(value < current.value) {
                    if(current.left) current = current.left
                    else return 'Not found'
                } else if(value > current.value) {
                    if(current.right) current = current.right
                    else return 'Not found'
                }
            }
            return current;
        }
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
console.log(bst.find(78));