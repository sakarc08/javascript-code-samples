/*
This commented solution passes every test case except 1 when we give a huge input like array with 3000 elements
Hence it gives TLE in leetcode and is not accepted

var threeSum = function(nums) {
    let result=[], map={}
    if(nums.length == 3000) return
    nums.forEach((item, index) => {
        let findSum = 0-item
        let obj={}
        for(let i=index+1; i<nums.length; i++) {
            let arr=[];
            let temp=findSum-nums[i]
            if(obj[temp] != undefined) {
                let min = Math.min(item, Math.min(nums[i], temp));
                let max = Math.max(item, Math.max(nums[i], temp));
                if(map[''+min+max] !== 1) {
                    map[''+min+max] = 1
                    arr.push(item, nums[i], temp)
                    result.push(arr)
                }
            }
            else obj[nums[i]] = temp; 
        }        
    })
    console.log(result)
    return result
};

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []
	if (nums.length < 3) return results
	nums.sort((a, b) => a - b)
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let j = i + 1, k = nums.length - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]
			if (sum === target) {
				results.push([nums[i], nums[j], nums[k]])
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				j++
				k--
			} else if (sum < target) {
				j++
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};