// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let child = numer1 * denom2 + denom1 * numer2;
  let parents = denom1 * denom2;

  //최대공약수 약분

  let gcd = 1;

  for (let i = 2; i <= child; i++) {
    if (child % i === 0 && parents % i === 0) gcd = i;
  }

  answer = [child / gcd, parents / gcd];

  return answer;
}
