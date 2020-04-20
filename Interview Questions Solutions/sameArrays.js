// Write a function called same which accepts 2 arrays.
// The function should return true if every value in first array has
// its corresponding value squared in the second array.
// The frequency of the values must be the same.

// Time complexity => O(n)

function same(arr1, arr2) {
    var obj1 = {}
    arr1.forEach(item => {
        obj1[item]  ? ++obj1[item] : obj1[item] = 1
    })
    
    var obj2 = {}
    arr2.forEach(item => {
       obj2[Math.sqrt(item)] ? ++obj2[Math.sqrt(item)] : obj2[Math.sqrt(item)] = 1
    })
   
    for(item in obj1) {
        if(obj1[item] !== obj2[item]) return 'Not Same'
    }
    
    return 'Same'
}

console.log(same([12], [144]));