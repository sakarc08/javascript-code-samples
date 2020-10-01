/*
    https://leetcode.com/problems/count-primes/submissions/
    sieve of eratosthenes
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let tracker = {};
    for(let outer=2; outer<n; outer++) {
        tracker[outer] = false
    }
    let sqr = Math.sqrt(n)
    for(let outer=2; outer<=sqr;outer++) {
        let inner = 2
        while(inner*outer < n){
            delete tracker[inner*outer]
            inner++
        }
    }
    
    return Object.keys(tracker).length
};