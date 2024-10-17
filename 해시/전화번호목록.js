// 접두어 사용하는 방식 => startsWith 사용 !!

function solution(phone_book) {
    phone_book.sort(); // 문자열 정렬

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) { // 각 번호를 바로 다음 번호와 비교
            return false;
        }
    }
    return true;
}

solution(["12","123","1235","567","88"])