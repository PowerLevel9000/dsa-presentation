// https://leetcode.com/problems/container-with-most-water/description/

// 11. Container With Most Water
// Medium
// 26K
// 1.4K
// Companies
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1


// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104


// Rough code 

// for max water we need maximum of height filled with water * width between height
// so first find relative height and width then product 
// compare it with previous ones and return the maximum


//  **************************************** Simple Solution ****************************/

//  not passing all test cases
const maxArea = (height) => {
    let maxWater = 0;
    for (let i = 0; i <= height.length; i++) {
        for (let j = i + 1; j <= height.length; j++) {
            let length = Math.min(height[i], height[j]);
            let width = j - i;
            let waterOccupied = length * width;
            maxWater = waterOccupied > maxWater ? waterOccupied : maxWater;
        }
    }
    return maxWater;
}


const maxAreaThree = (height) => {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const length = Math.min(height[left], height[right]);
        const width = right - left;
        const waterOccupied = length * width;
        maxWater = Math.max(maxWater, waterOccupied);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
