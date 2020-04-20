function merge(arr1, arr2) {
    let i=0,j=0, arr=[];
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    let result = [];
    if(i >= arr1.length) {
        result = arr.concat(arr2.slice(j))
    } else result = arr.concat(arr1.slice(i))

    return result;
}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle))
    return merge(left, right);
}

const sortedArr = mergeSort([10, -1, 2, 5, 6, 4, -5]);
console.log(sortedArr);