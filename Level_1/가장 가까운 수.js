function solution(s) {
  let result = [];
  let chkStr = [];
  for (let i = 0; i < s.length; i++) {
    if (!chkStr.includes(s[i])) {
      result.push(-1);
      chkStr.push(s[i]);
    } else {
      result.push(i - chkStr.lastIndexOf(s[i]));
      chkStr.push(s[i]);
    }
  }
  return result;
}
