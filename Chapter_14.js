// 무작위로 K개의 수 뽑기

function solution(arr, k) {
  var answer = [];
  const newArr = [...new Set(arr)];

  for (let i = 0; i < k; i++) {
    if (newArr[i] !== undefined) answer.push(newArr[i]);
    else answer.push(-1);
  }
  return answer;
}
