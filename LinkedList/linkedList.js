class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return ++this.length;
    }

    pop() {
        let current = this.head;
        if(!current) return 'Empty linked list';
        else {
            while(current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
            return --this.length;
        }
    }

    print() {
        if(!this.length) return 'Empty list';
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
        return;
    }

    reverse() {
        let current = this.head;
        let self = this;
        function recur(node) {
            if(!node.next) {
                self.head = node;
                return self.head;
            } else {
                const abc = recur(node.next);
                abc.next = node;
                return abc.next;
            }
        }
        const bcd = recur(current);
        bcd.next = null;
        this.tail = bcd;
    }
}

let ll = new LinkedList();
ll.push(2);
ll.push(4);
ll.push(6);
ll.push(8);
ll.push(14);
ll.push(24);
// ll.print();
console.log('=========================');
ll.reverse()
ll.print()