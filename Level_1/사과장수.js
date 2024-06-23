function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  const boxCount = Math.floor(score.length / m);

  for (let i = 0; i < boxCount; i++) {
    const minScoreInBox = score[(i + 1) * m - 1];
    answer += minScoreInBox * m;
  }

  return answer;
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
