class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        const parent = (this.values.length-1-2)/2
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
}