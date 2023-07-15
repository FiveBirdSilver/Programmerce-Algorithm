// 소수

function solution(nums) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  function isPrime(N) {
    if (N === 1) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) return false;
    }
    return true;
  }

  const newARr = arr.filter((v) => isPrime(v));
  return newARr.length;
}
