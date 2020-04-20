function insertionSort(arr = [45, 12, 2, 4, 1, 9, 6]) {
    for (let outer = 1; outer < arr.length; outer++) {
        let pivot = arr[outer];
        for (var inner = outer; inner > 0; inner--) {
            if(arr[inner-1] < pivot) {
                break;
            }
            arr[inner] = arr[inner-1];
        }
        arr[inner] = pivot;
    }
    console.log('sorted array => ', arr);
}

insertionSort([47,2,6,5,9,12,45]);
// [47,2,6,5,9,12,45]