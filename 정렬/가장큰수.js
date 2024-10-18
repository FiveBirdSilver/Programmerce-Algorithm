function solution(numbers) {
    const result = numbers.map(String).sort((a, b) => {
        return (b + a) - (a + b);
    }).join('')

    return result[0] === '0' ? '0' : result;

}

solution([6, 10, 2])
solution(['A', 'B', 'C'])