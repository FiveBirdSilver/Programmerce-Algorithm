function solution(n) {
    let stack = [];

    for (let char of n) {
        if (stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0 ? 1 : 0
}

solution("baabaa");

