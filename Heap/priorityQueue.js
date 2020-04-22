class PriorityQueue {
    constructor() {
        this.values = [];
    }

    swap(arr, index1, index2) {
        [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
    }

    bubbleUp() {
        let current = this.values.length-1;
        let parent;

        while(current) {
            parent = Math.floor((current-1)/2);
            if(this.values[parent].priority > this.values[current].priority) {
                this.swap(this.values, parent, current);
                current = parent;
            } else break;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        let leftIndex, rightIndex, currentValue;

        while(true) {
            currentValue = this.values[currentIndex].priority;
            leftIndex = 2*currentIndex + 1;
            rightIndex = 2*currentIndex + 2;
            let swap = null;

            if(leftIndex < this.values.length) {
                if(currentValue > this.values[leftIndex].priority) {
                    swap = leftIndex; 
                }
            }

            if(rightIndex < this.values.length) {
                if((swap == null && this.values[rightIndex].priority < currentValue) || (swap !== null && this.values[leftIndex].priority > this.values[rightIndex].priority)) {
                    swap = rightIndex;
                } 
            }
            
            if(!swap) break;
            this.swap(this.values, swap, currentIndex);
            currentIndex = swap;
        }
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.bubbleUp();
    }

    dequeue() {
        this.swap(this.values, 0, this.values.length-1);
        let max = this.values.pop();
        this.heapifyDown();
        return max;
    }
}

const pq = new PriorityQueue();
pq.enqueue('common cold', 5);
pq.enqueue('gunshot wound', 1);
pq.enqueue('high fever', 4);
pq.enqueue('broken arm', 2);
pq.enqueue('glass in foot', 3);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());