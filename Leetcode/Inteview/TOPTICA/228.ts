function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];

    let result: string[] = [];
    let start: number = nums[0];

    for (let i = 0; i < nums.length; i++) {
        // If the next number is not consecutive or at the last element
        if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {
            if (start === nums[i]) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${nums[i]}`);
            }
            if (i + 1 < nums.length) start = nums[i + 1]; // Start new range
        }
    }

    return result;
}

let temp: string[] = summaryRanges([0,1,2,4,5,7]);
console.log(temp);
