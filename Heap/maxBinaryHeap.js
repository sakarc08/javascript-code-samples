class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    swap(arr, index1, index2) {
        [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
    }

    bubbleUp() {
        let current = this.values.length-1;
        let parent;

        while(true) {
            parent = Math.floor((current-1)/2);
            if(this.values[parent] < this.values[current]) {
                this.swap(this.values, parent, current);
                current = parent;
            } else break;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        let leftIndex, rightIndex, currentValue;

        while(true) {
            currentValue = this.values[currentIndex];
            leftIndex = 2*currentIndex + 1;
            rightIndex = 2*currentIndex + 2;
            let swap;
            if(currentValue < Math.max(this.values[leftIndex], this.values[rightIndex])) {
                swap = this.values.indexOf(Math.max(this.values[leftIndex], this.values[rightIndex]));
                this.swap(this.values, currentIndex, this.values.indexOf(Math.max(this.values[leftIndex], this.values[rightIndex])))
                currentIndex = swap;
            } else break;
        }
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    extractMax() {
        this.swap(this.values, 0, this.values.length-1);
        let max = this.values.pop();
        this.heapifyDown();
        return max;
    }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(55);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.values);