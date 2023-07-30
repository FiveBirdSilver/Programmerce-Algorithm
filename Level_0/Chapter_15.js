// 문자열 여러번 뒤집기

function solution(my_string, queries) {
  let answer = [...my_string];

  let result = "";
  for (let i = 0; i < queries.length; i++) {
    const gap = queries[i][1] - queries[i][0];
    result = answer.slice(queries[i][0], queries[i][1] + 1).reverse();
    answer.splice(queries[i][0], gap + 1);
    answer.splice(queries[i][0], 0, ...result);
  }

  return answer.join("");
  return answer;
}
