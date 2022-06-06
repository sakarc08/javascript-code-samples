// let arr = [45, 12, 2, 4, 1, 9, 6];
// let arr = [47,2,6,5,9,12,45];
// let arr = [10, -1, 2, 5, 6, 4, -5];
let arr = [3, 0, 2, 5, -1, 4, 1 ];

function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}


function selectionSort() {
    for (let outer = 0; outer < arr.length; outer++) {
        let minIndex = outer;
        for (let inner = outer+1; inner < arr.length; inner++) {
           if(arr[inner] < arr[minIndex]) minIndex = inner;
        }
        swap(minIndex, outer);
    }
}

selectionSort()
console.log(arr);