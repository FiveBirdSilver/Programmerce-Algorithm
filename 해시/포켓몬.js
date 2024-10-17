function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];
    return arr.length > max ? max : arr.length
}

solution([3,3,3,2,2,2])