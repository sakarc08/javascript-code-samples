class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.totalNodes = 0;
    }

    addNode(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
        this.totalNodes++;
    }

    removeNode(value){
        if(!this.head) console.log('Linked list is empty')
        else if(this.head === this.tail) this.head = this.tail = null;
        else {
           let current = this.head;
           let prev = null;

           while(current && current.value !== value) {
               prev = current;
               current = current.next;
           }
           if(!current) console.log('No element matches for deletion');
           else if(current == this.head) {
               this.head = current.next;
           } else if(current == this.tail) {
               console.log('reached');
               prev.next = current.next;
               this.tail = prev;
           } else prev.next = current.next;
        }
        
    }

    reverse() {
        let prev = null, current = this.head;
        
        while(current) {
            
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        console.log(current)
        this.head = prev;
        
    }

    printList() {
        let start = this.head;
        if(!start) console.log('List is empty');
        while(start){
            console.log(start.value);
            start=start.next;
        }
    }
}

let ll = new SingleLinkedList();
ll.addNode(2);
ll.addNode(12);
ll.addNode(22);
ll.addNode(28);
ll.addNode(42);
ll.addNode(13);

ll.printList()
ll.reverse()
console.log('=======')
ll.printList()
