/*
    https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sortedArr = [...nums].sort((a,b) => a-b)
    let tracker = {}
    sortedArr.forEach((item, index) => {
        tracker[item] == undefined ? tracker[item] = index : ''
    })
    nums.forEach((item, index) => sortedArr[index] = tracker[item])
    return sortedArr
};