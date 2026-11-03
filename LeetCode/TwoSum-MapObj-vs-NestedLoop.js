/**You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9

Output: [0,1] */

let twoSum = function(nums, target) {

    for(let i = 0; i < nums.length; i++ ){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }

    }
}

///Map Object Method more efficient!
/**
Why the Map solution is still better

While this fixed nested loop version works, its time complexity is \(\mathcal{O}(n^2)\) because it has to search through the remaining array elements over and over. The Map version solves this in a single pass (\(\mathcal{O}(n)\)) by checking the map instantly instead of running a second loop. */

function twoSum(nums, target) {
    const seen = new Map(); // value -> index
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        
        seen.set(nums[i], i);
    }
}