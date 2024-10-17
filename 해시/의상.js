function solution(clothes) {
    let hash = {};

    for(let cloth of clothes) {
        hash[cloth[1]] = (hash[cloth[1]] || 0) + 1;
    }

    let result = 1;
    for(let count of Object.values(hash)) {
        result *= (count + 1);
    }

    return result - 1; // 아무것도 입지 않는 경우 제외
}
solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
