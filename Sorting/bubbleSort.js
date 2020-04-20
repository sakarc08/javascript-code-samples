function bubbleSort(arr = [45, 12, 2, 4, 1, 9, 6]) {
    let flag = false;
    for (let outer = arr.length - 1; outer >= 0; outer--) {
        for (let inner = 0; inner <= outer - 1; inner++) {
            if (arr[inner] > arr[inner + 1]){
                flag = true;
                swap(inner, inner + 1, arr);
            }
            else continue;
        }
        if(!flag) break;
    }
    console.log('sorted array => ', arr);
}

function swap(index1, index2, arr) {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}

bubbleSort([47,2,6,5,9,12,45]);
