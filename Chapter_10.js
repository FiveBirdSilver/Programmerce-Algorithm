// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진
// 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

function solution(l, r) {
  var answer = [];
  let tmpArr = [];
  let tmpArr2 = [];

  for (let i = l; i <= r; i++) {
    if (String(i).includes("5") || String(i).includes("0")) {
      tmpArr.push(String(i).split(""));
    }
  }
  for (let i = 0; i < tmpArr.length; i++) {
    for (let v = 0; v < tmpArr[i].length; v++) {
      const confirm = tmpArr[i].every((o) => o === "5" || o === "0");
      if (confirm) {
        tmpArr2.push(tmpArr[i]);
      }
    }
  }

  const tmpArr3 = [...new Set(tmpArr2)];
  if (tmpArr3.length === 0) answer.push(-1);
  else {
    for (let i = 0; i < [...new Set(tmpArr2)].length; i++) {
      answer.push(Number(tmpArr3[i].join("")));
    }
  }
  return answer;
}
