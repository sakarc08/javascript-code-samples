// let arr = [45, 12, 2, 4, 1, 9, 6];
// let arr = [47,2,6,5,9,12,45];
// let arr = [10, -1, 2, 5, 6, 4, -5];
let arr = [3, 0, 2, 5, -1, 4, 1 ];

function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function bubbleSort() {
    for (let outer = arr.length-1; outer > 0; outer--) {
        for (let inner = 0; inner < outer; inner++) {
            if(arr[inner] > arr[inner+1]) swap(inner, inner+1)
        }
    }
}

bubbleSort();
console.log(arr);