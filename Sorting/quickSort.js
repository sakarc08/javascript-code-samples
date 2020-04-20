function sortByPivot(arr) {
    let pivot = arr[start];
    let countToBeSwap = start;

    for (let index = start+1; index < arr.length; index++) {
        if(arr[index] < pivot) {
            countToBeSwap++;
            swap()
        }
    }
    swap(countToBeSwap+pivot, start, arr);
}

function swap(index1, index2, arr) {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}

function quickSort(arr, start=0, end=arr.length) {
    sortByPivot(arr, start,end);
}

const sortedArr = quickSort([10, -1, 2, 5, 6, 4, -5]);