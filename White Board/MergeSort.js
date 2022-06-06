let arr = [3, 0, 2, 5, -1, 4, 1 ];
// let arr = [45, 12, 2, 4, 1, 9, 6];
// let arr = [47,2,6,5,9,12,45];
// let arr = [10, -1, 2, 5, 6, 4, -5];

function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function mergeLogic(left, right) {
    let i = 0, j = 0, arr1 = [];

    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            arr1.push(left[i])
            i++;
        } else {
            arr1.push(right[j]);
            j++;
        }
    }

    if(i === left.length) {
        while(j < right.length) {
            arr1.push(right[j]);
            j++;
        }
    } else if(j == right.length) {
        while(i < left.length) {
            arr1.push(left[i]);
            i++;
        }
    }
    return arr1;
}

function mergeSort(left, right) {
    if(left===right) return [arr[left]];
    let middle = Math.floor((left+right)/2);
    let leftSorted = mergeSort(left, middle);
    let rightSorted = mergeSort(middle+1, right);
    return mergeLogic(leftSorted, rightSorted);
}


console.log(mergeSort(0, arr.length-1))