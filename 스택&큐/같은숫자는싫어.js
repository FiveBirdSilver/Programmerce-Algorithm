// 연속된 숫자 제거
function solution(arr) {
    return arr.filter((item, index) => item !== arr[index - 1])
}

solution([1,1,3,3,0,1,1]);
