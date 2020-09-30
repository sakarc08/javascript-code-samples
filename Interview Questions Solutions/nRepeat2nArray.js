/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let mapper = {}
    for(let i=0; i<(2+A.length/2);i++){
        if(mapper[A[i]]) return A[i]
        mapper[A[i]] = 1
    }
};