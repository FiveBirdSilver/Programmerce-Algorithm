function solution(prices) {
    let answer = [];
    for(let i = 0; i < prices.length; i++){
        let count = 0;
        for(let j = i + 1; j < prices.length; j++){
            count++;
            if (prices[i] > prices[j]) {
                break;  // 가격이 떨어지면 즉시 루프를 종료
            }
        }
        answer.push(count);
    }
    return answer;
}

solution([1, 2, 3, 2, 3])