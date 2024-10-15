// 1. 문자열을 공백을 기준으로 단어로 나누기.
// 2. 각 단어의 첫 글자를 대문자로, 나머지를 소문자로 변환하기. (charAt 활용!!)
// 3. 변환된 단어들을 다시 공백으로 연결하기.

function solution(s) {
    return s.split(" ").map(word => {
        if (word === "") return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");

}

solution("3people unFollowed me");