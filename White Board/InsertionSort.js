let arr = [45, 12, 2, 4, 1, 9, 6];
// let arr = [47,2,6,5,9,12,45];
// let arr = [10, -1, 2, 5, 6, 4, -5];
// let arr = [3, 0, 2, 5, -1, 4, 1 ];

function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}


function insertionSort() {
    for (let outer = 1; outer < arr.length; outer++) {
        let element = arr[outer], inner = outer-1;
        for (; inner >= 0 ; inner--) {
            if(arr[inner] > element) arr[inner+1] = arr[inner];
            else break;
        }
        arr[inner+1] = element;
    }
}

insertionSort()
console.log(arr);