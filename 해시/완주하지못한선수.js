// 해시 테이블 : 키(key)와 값(value)을 연결하여 데이터를 저장하는 자료구조
function solution(participant, completion) {
    const hash = {};

    // 참가자 이름을 해시 테이블에 추가
    for (let name of participant) {
        hash[name] = hash[name] ? hash[name] + 1 : 1;
    }

    // 완주자 이름을 해시 테이블에서 제거
    for (let name of completion) {
        hash[name] = hash[name] - 1
    }

    // 해시 테이블에 남아있는 이름 반환
    for (let name in hash) {
        if (hash[name] > 0) {
            return name;
        }
    }
}


solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"])
