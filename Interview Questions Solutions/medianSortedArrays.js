// https://www.youtube.com/watch?v=LPFhl65R7ww&ab_channel=TusharRoy-CodingMadeSimple
// https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/
/**
 * If we merge 2 sorted arrays and then take median, what we doo basically 
 * is divide the merged array in 2 equal halves and pick the middle element.
 * Acc.to this algo, we will save the time of merging both array
 * and find the partition point in both the given arrays indivually such that the
 * combined Left and Right of both the array are equal in length
 *  eg:- x = [1,2,3,4,5] y = [6,7,8] after merge -> [1,2,3,4,5,6,7,8]
 *  partitionX = 2 partitionY = 2   
 *  leftX = 1,2 right X = 3,4,5 leftY = 6,7 rightY = 8       
 *                  1,2 | 3,4,5
 *                  6,7 | 8
 *                                                  
 *  If we see left and right have equal no. of values
 *  Now we can just find median since we have our 4 values surrounding the partition.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result=0,partitionY=0, partitionX = 0, min = nums1.length <= nums2.length ? nums1: nums2;
    let start = 0, end = min.length, max = nums1.length == min.length ? nums2 : nums1;
    while(1) {
        partitionX = Math.floor((start+end)/2);
        let maxLeftX = partitionX ? min[partitionX-1] : -Infinity;
        let minRightX = partitionX !== min.length ? min[partitionX] : Infinity ;
    
        partitionY = Math.floor((nums1.length + nums2.length+1)/2) - partitionX;
        let maxLeftY = partitionY ? max[partitionY-1] : -Infinity;
        let minRightY = partitionY !== max.length ? max[partitionY] : Infinity

            if((maxLeftX <= minRightY) && maxLeftY <= minRightX) {
                if((nums1.length+nums2.length) % 2) return Math.max(maxLeftX, maxLeftY)
                else return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2
            }
            else if(maxLeftX > minRightY) {
                end=partitionX-1;
            } else start = partitionX+1;   
    }
};