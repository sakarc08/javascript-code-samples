function selectionSort(arr = [45, 12, 2, 4, 1, 9, 6]) {
    for (let outer = 0; outer < arr.length; outer++) {
        let min = outer;
        for (let inner = outer + 1; inner < arr.length; inner++) {
            if(arr[inner] < arr[min]) min = inner;
        }
        swap(outer, min, arr);
    }
    console.log('sorted array => ', arr);
}

function swap(index1, index2, arr) {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}

selectionSort();
// [47,2,6,5,9,12,45]