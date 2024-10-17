function solution(progresses, speeds) {
    let days = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index])
    );

    let answer = [];
    let max = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= max) {
            count++;
        } else {
            answer.push(count);
            max = days[i];
            count = 1;
        }
    }
    return answer;
}
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])