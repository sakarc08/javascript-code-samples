// Example 1

var memo1 = function(fun1){
    let result = {
        prevNum: 0,
        prevResult: 0
    };
    return function(num) {
        result.prevResult+=fun1(num-result.prevNum)
        result.prevNum = num;
        return result.prevResult;
    }
}

var clumsysquare1 = memo1(function(num){
    let result = 0;
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            result++;
        }
    }
    return result;

})
console.time("First call");
console.log(clumsysquare1(9467));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(clumsysquare1(9467));
console.timeEnd("Second call");

console.time("Third call");
console.log(clumsysquare1(9467));
console.timeEnd("Third call");


/** Output - 1st call calculation took time, but for same call it took same time due to memoization
 * 89624089
VM1754:25 First call: 74.2822265625 ms

VM1754:29 89624089
VM1754:30 Second call: 0.0400390625 ms

VM1754:33 89624089
VM1754:34 Third call: 0.044189453125 ms
 * 
 */


// Example 2

function sumUpTO(num1, num2) {
    let abc = 0;
    for (let index = num1; index < num2; index++) {
        abc+=index;
    }
    return abc;
}

const memoizedFunc = (() => {
    let lastCalculated = 0, sum = 0;
    return function abc(num) {
        sum+=sumUpTO(lastCalculated, num);
        lastCalculated = num;
        return sum;
    }
})();


console.time("First call");
console.log(memoizedFunc(193));
console.timeEnd("First call");

console.time("First call");
console.log(memoizedFunc(193));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(memoizedFunc(294));
console.timeEnd("Second call");

console.time("Third call");
console.log(memoizedFunc(304))
console.timeEnd("Third call");
