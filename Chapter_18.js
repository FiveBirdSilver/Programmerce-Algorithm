// 행렬의 덧셈
function solution(arr1, arr2) {
  var answer = [];
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
