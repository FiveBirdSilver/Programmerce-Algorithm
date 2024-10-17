function solution(n) {
    let answerSet = new Set();

    function isPrime(num) {
        if(num < 2) return false;
        for(let i = 2; i * i <= num; i++) {
            if(num % i === 0) return false;
        }
        return true;
    }

    function getPermutations(str, len) {
        if (len === 1) return str.split('');

        const result = [];
        for (let i = 0; i < str.length; i++) {
            const current = str[i];
            const remaining = str.slice(0, i) + str.slice(i + 1);
            const subPermutations = getPermutations(remaining, len - 1);

            for (let perm of subPermutations) {
                result.push(current + perm);
            }
        }
        return result;
    }

    for (let len = 1; len <= n.length; len++) {
        let permutations = getPermutations(n, len);
        permutations.forEach(perm => {
            if (perm[0] !== '0' && isPrime(perm)) {
                answerSet.add(parseInt(perm));
            }
        });
    }

    const answer = Array.from(answerSet);
    return answer.length;
}

// 테스트
solution("011")