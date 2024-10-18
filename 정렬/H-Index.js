function solution(citations) {
    let h_index = 0
    citations.sort((a, b) => b - a);

    if(citations[0] === 0) h_index = 0;
    for(let i = 0; i < citations.length; i++){
        if(citations[i] >= i + 1) {
            h_index = i + 1
        }
    }
    return h_index;
}

solution([3, 0, 6, 1, 5]) // 3
