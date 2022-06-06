let arr = [45, 12, 2, 4, 1, 9, 6];
// let arr = [47,2,6,5,9,12,45];
// let arr = [10, -1, 2, 5, 6, 4, -5];
// let arr = [3, 0, 2, 5, -1, 4, 1 ];

function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function sortByPivot(start, end, elementIndex) {

    let e = start+1, f = end;
    while(arr[e] < arr[elementIndex] && e < f) {
        e++;
    }
    while(arr[f] > arr[elementIndex]) {
        f--;
    }

    if(e < f) {
        swap(e,f)
        return sortByPivot(e, f, elementIndex);
    } else swap(f, elementIndex);

    return f;
}

function quickSort(start, end) {
    if(start > end) return;
    let pivotElementIndex = sortByPivot(start, end, start);
    quickSort(start, pivotElementIndex-1);
    quickSort(pivotElementIndex+1, end);
    
}
quickSort(0, arr.length-1)
console.log(arr);