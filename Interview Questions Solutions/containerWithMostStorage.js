/*
    https://leetcode.com/problems/container-with-most-water/submissions/


    Try to maximize the length and breadth
    max length and max breadth will give the max area
    put variables at the start and end and 
    increase/decrease iteration based on the current maxWidth
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0, j=height.length-1, maxWidth=0, currentArea = 0
    while(i<j) {
        if(height[i] <= maxWidth) {
            i++;
            continue;
        }  
        else {
            currentArea = Math.max(currentArea, (j-i) * Math.min(height[i], height[j]));
            maxWidth = Math.max(maxWidth, Math.min(height[i], height[j]));
    
        }
        if(height[j] <= height[i]) j--
        else i++
    }
    return currentArea
};