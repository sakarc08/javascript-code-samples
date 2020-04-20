class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
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
                        return;
                    }
                }
                else if(value > current.value) {
                    if(current.right) current = current.right;
                    else {
                        current.right = node;
                        return;
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

    BFS() {
        let current = this.root;
        if(!root) return 'Empty tree';
        const queue = [];
        const traversed = [];
        queue.push(current);
        while(queue.length) {
            current = queue.shift();
            traversed.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }

        return traversed;
    }

    DFS_preorder() {
        let current = this.root;
        const traversed = [];
        function traverse(node) {
            traversed.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return traversed;
    }

    DFS_postorder() {
        let current = this.root;
        const traversed = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            traversed.push(node);
        }

        traverse(current);
        return traversed;
    }

    DFS_inorder() {
        let current = this.root;
        const traversed = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            traversed.push(node);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return traversed;
    }
}

    //         10
    //     5       13
    //   2   7    11   16

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
console.log(bst.DFS_inorder());