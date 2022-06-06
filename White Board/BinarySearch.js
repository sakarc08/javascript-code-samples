// let arr = [45, 12, 2, 4, 1, 9, 6];
let arr = [2,5,6,9,12,45,47];
// let arr = [10, -1, 2, 5, 6, 4, -5];
// let arr = [-1, 0, 1, 2 ,3, 4 ,5 ,7 ];

function binarySearch(start, end, num) {
    // console.log(start, end)
    if(start > end) return 'Element not found';
    let middleIndex = Math.floor((start+end)/2);
    if(arr[middleIndex] === num) return middleIndex;
    else if(arr[middleIndex] < num) return binarySearch(middleIndex + 1, end, num)
    else return binarySearch(start, middleIndex-1, num);
}

console.log(binarySearch(0, arr.length-1, 9));