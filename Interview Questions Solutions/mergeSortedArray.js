/* 
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/96/sorting-and-searching/587/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i =0, j =0, switches=0;
    
    function shift(value, index) {
        if(index == nums1.length) return;
        let currentVal = nums1[index];
        nums1[index] = value;
        shift(currentVal, index+1)
    }
    
    while(j<n) {
        if(nums2[j] >= nums1[i]) {
            i++;
            if(i>=m+n-1) {
                for(let temp=m+switches; temp<nums1.length;temp++) {
                    nums1[temp] = nums2[j]
                    j++
                }
            }
        } else {
            switches++
            shift(nums2[j] , i)
            j++
        }
    }
    return nums1
};
