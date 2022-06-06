
Array.prototype.myreduce = function (fn, initialVal) {
    let val = initialVal;
    this.forEach((item, index) => {
        val = fn(val, item);
    })
    return val;
}

const temp = [1,2,3,4,5,6,7];
console.log(temp.myreduce((start, item) => item+start, 2));

// Array.prototype.mymap = function (fn) {
//     const arr = [];
//     this.forEach((item, index) => {
//         arr.push(fn(item, index))
//     })
//     return arr;
// }

// const temp = [1,2,3,4,5,6,7];
// console.log(temp.mymap((x, index) => (index+x)*3));


// Array.prototype.myfilter = function (fn) {
//     const arr = [];
//     this.forEach((item, index) => {
//         const result = fn(item, index);
//         result && arr.push(item);
//     })
//     return arr;
// }

// const temp = [1,2,3,4,5,6,7];
// console.log(temp.myfilter(x => x%2 === 0));