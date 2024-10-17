// 10진수 => 2진수
function solution(n) {
    let deleteZeroCount = 0;
    let transformCount = 0

    while (n !== '1') {
        deleteZeroCount += (n.match(/0/g) || []).length
        n = n.replaceAll("0", "").length.toString(2)
        transformCount++;
    }
    return [transformCount, deleteZeroCount];
}

solution("110010101001");
