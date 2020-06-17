/* 
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i=0, j=1, sum=0; buy = false;
    for(; j<prices.length;) {
        if(prices[j] > prices[i] || buy) {
            buy = true;
            if(prices[j] < prices[j-1]) {
                sum+= prices[j-1] - prices[i]
                i=j;
                j++;
                buy = false
            }
            
            else {
                j++;
                if(j == prices.length) sum+= prices[j-1] - prices[i]
            }
            continue;
        }
        else {
            i++;
            j++;
            continue;
        }
    }
    
    return sum
};