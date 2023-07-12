// 로그인 성공

function solution(id_pw, db) {
  var answer = "";

  for (let v of db) {
    if (v[0] !== id_pw[0] && v[1] !== id_pw[1]) answer = "fail";
    else if (v[0] === id_pw[0] && v[1] === id_pw[1]) answer = "login";
    else answer = "wrong pw";
  }
  return answer;
}
