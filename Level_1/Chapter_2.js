// 기사단원의 무기

function solution(number, limit, power) {
  var answer = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    let tmp = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        tmp.push(j);
        if (i / j != j) tmp.push(i / j);
      }
    }
    arr.push(tmp.length);
  }

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > limit) arr[k] = power;
  }

  answer = arr.reduce(function add(sum, cur) {
    return sum + cur;
  }, 0);
  return answer;
}
