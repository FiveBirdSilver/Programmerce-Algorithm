//A의 가장 작은 값과 B의 가장 큰 값을 곱하는 것이 전체 합을 최소화함
function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    let answer = 0
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
}

solution([1, 2], [3, 4]);