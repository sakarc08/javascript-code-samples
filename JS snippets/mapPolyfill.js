Array.prototype.mapPolyfill = function(fun1) {
    let newObj = [];
    for(x in this) {
        newObj.push(fun1(this[x]));
    }
    return newObj;
}

let arr = [1,2,3,4,5];
console.log(arr.mapPolyfill((x) => x*2));