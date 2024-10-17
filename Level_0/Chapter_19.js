// 최대공약수 최소공배수
function solution(n, m) {
  let answer = [];
  if (m % n === 0) answer = [n, m];
  else {
    for (let i = 1; i <= m; i++) {
      if (n % i === 0 && m % i === 0) answer = [i, (n * m) / i];
    }
  }
  return answer;
}

solution(3, 12);