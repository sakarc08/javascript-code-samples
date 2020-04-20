class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if(!this.size) this.first = this.last = node;
        else {
            this.last.next = node;
            this.last = node;
        }
        ++this.size;
    }

    dequeue() {
        if(!this.size) return 'Nothing to pop';
        if(this.first == this.last) this.first = null;
        else {
            this.first = this.first.next;
        }
        --this.size;
    }

    print() {
        let node = this.first;
        while(node) {
            console.log(node.value);
            node=node.next;
        }
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue(6);
queue.enqueue(8);
queue.dequeue();
queue.dequeue();
queue.print();