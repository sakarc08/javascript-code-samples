class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.last = null;
        this.first = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        if(!this.size) this.last = this.first = node;
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }

    pop() {
        let node = this.first;
        if(!this.size) return 'Nothing to pop';
        if(this.first === this.last) this.first = this.last = null;
        while(node.next !== this.last) {
            node=node.next;
        }
        this.size--;
        node.next = null;
        this.last = node;
    }

    print() {
        let node = this.first;
        while(node) {
            console.log(node.value);
            node=node.next;
        }
    }
}

const stack = new Stack();
stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.pop()
stack.pop()
// stack.push(6)
// stack.push(9)
stack.print()
