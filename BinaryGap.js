function solution(N) {
    let binary = N.toString(2);
    let maxZeroes = 0
    let currentZeroes = 0
    let count = 0

    for (let i=0; i<binary.length; i++){
        if (binary.charAt(i) === '0'){
            count++
        } else {
            currentZeroes = count
            count = 0
            maxZeroes = Math.max(currentZeroes, maxZeroes)
        }
    }
    return maxZeroes
}