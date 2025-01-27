/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = m - 1;
  let j: number = n - 1;
  let k: number = m + n - 1;

  // iterate through both arrays
  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      --i;
    } else {
      nums1[k] = nums2[j];
      --j;
    }
    --k;
  }

  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
