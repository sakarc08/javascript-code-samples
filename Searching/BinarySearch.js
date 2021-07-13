// let arr = [45, 12, 2, 4, 1, 9, 6];
// let arr = [2,5,6,9,12,45,47];
// let arr = [10, -1, 2, 5, 6, 4, -5];
let arr = [-1, 0, 1, 2 ,3, 4 ,5 ,7 ];

function binarySearch(start, end, num) {
    // console.log(start, end)
    if(start === end && num !== arr[start]) return -1;
    let middle = Math.floor((start+end)/2);
    if(num === arr[middle]) return middle;
    else if(num > arr[middle]) return binarySearch(middle+1, end, num)
    else return binarySearch(start, middle, num);
}

console.log(binarySearch(0, arr.length-1, -1));