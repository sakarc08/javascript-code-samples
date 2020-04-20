function sortByPivot(arr, start, end) {
    let pivot = arr[start];
    let countToBeSwap = start;

    for (let index = start+1; index < arr.length; index++) {
        if(arr[index] < pivot) {
            countToBeSwap++;
            swap(arr, countToBeSwap, index)
        }
    }
    swap(arr, countToBeSwap, start);
    return countToBeSwap;
}

function swap(arr, index1, index2) {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}

function quickSort(arr, start = 0, end=arr.length) {
    if(start < end){
        const pivot = sortByPivot(arr, start, end);
        quickSort(arr, start, pivot-1)
        quickSort(arr, pivot+1, arr.length)
    }

    return arr;
}

console.log(quickSort([3, 0, 2, 5, -1, 4, 1 ]));