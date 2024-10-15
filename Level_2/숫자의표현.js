function solution(n) {
    let count = 0;

    for (let start = 1; start <= n; start++) {
        let sum = 0;
        for (let i = start; sum < n; i++) {
            sum += i;
            if (sum === n) {
                count++;
                break;
            }
        }
    }

    return count;
}

solution(15);