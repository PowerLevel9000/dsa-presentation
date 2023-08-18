// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.



//  Rough code 
// 1=> sorted merge of both array like [1, 3]& [2] => [1, 2, 3] 
// 2 => find median according to maths formula

// **************************************************************** simple solution ********************************************

const findMedianSortedArrays = (nums1, nums2) => {
    const sortedMergeArray = [...nums1, ...nums2].sort((a, b) => a - b)
    const middleIndex = Math.floor(sortedMergeArray.length / 2)
    if (sortedMergeArray.length % 2 === 0) {
        return (sortedMergeArray[middleIndex - 1] + sortedMergeArray[middleIndex]) / 2;
    } else {
        return sortedMergeArray[middleIndex];
    }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));

//********************************************* */ Improved Solution *************************************

const findMedianSortedArraysImprove = (nums1, nums2) => {
    const sortedMergeArray = sortMerge(nums1, nums2)
    const middleIndex = Math.floor(sortedMergeArray.length / 2)
    if (sortedMergeArray.length % 2 === 0) {
        return (sortedMergeArray[middleIndex - 1] + sortedMergeArray[middleIndex]) / 2;
    } else {
        return sortedMergeArray[middleIndex];
    }
}

//  improve sorting to improve time as arrays are sorted 

const sortMerge = (arr1, arr2) => {
    const result = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            result.push(arr1[pointer1])
            pointer1++
        } else {
            result.push(arr2[pointer2])
            pointer2++
        }
    }

    while (pointer1 < arr1.length) {
        result.push(arr1[pointer1]);
        pointer1++;
    }

    while (pointer2 < arr2.length) {
        result.push(arr2[pointer2]);
        pointer2++;
    }

    return result;
}