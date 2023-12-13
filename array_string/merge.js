const merge = (nums1, m, nums2, n) => {
    // Pseudocode
    // 1. Iterate through the second array
    // 2. Add the current element to the first array
    // 3. Sort the first array
    // 4. Return the first array

    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
    return nums1;
}

// const merge = (nums1, m, nums2, n) => {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;

//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }

//     while (j >= 0) {
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }

//     return nums1;
// }

module.exports = merge;