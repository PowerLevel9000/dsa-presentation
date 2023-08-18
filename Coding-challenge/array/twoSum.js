// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

//************************************************************** */  Simple Solution O(n^2) ********************************************
console.time('Execution time');
let twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j];
            }
        }
    }
};

let twoSumImprove = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

var twoSumMap = function(nums, target) {
    const numMap = {}; 
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (numMap.hasOwnProperty(complement)) {
        return [numMap[complement], i];
      }
      
      numMap[nums[i]] = i;
    }
    
    return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSumImprove([2,7,11,15], 9));
console.log(twoSumMap([2,7,11,15], 9));



//  only for measuring performance not related to test cases

const bigInput = Array.from({ length: 10000 }, (_, index) => index); 

const target = 9998;

// Measure the execution time of twoSum
const start1 = performance.now();
console.log(twoSum(bigInput, target));
const end1 = performance.now();
console.log(`twoSum execution time: ${end1 - start1} milliseconds`);

// Measure the execution time of twoSumImprove
const start2 = performance.now();
console.log(twoSumImprove(bigInput, target));
const end2 = performance.now();
console.log(`twoSumImprove execution time: ${end2 - start2} milliseconds`);

// Measure the execution time of twoSumMap
const start3 = performance.now();
console.log(twoSumMap(bigInput, target));
const end3 = performance.now();
console.log(`twoSumImprove execution time: ${end2 - start2} milliseconds`);

