// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
// 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
// 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
  const avgs = score.map(([a, b]) => (a + b) / 2);

  const answer = Array.from({ length: avgs.length }, () => 1);

  for (let i = 0; i < avgs.length; i++) {
    for (let j = 0; j < avgs.length; j++) {
      if (avgs[i] < avgs[j]) answer[i]++;
    }
  }

  return answer;
}

function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}
