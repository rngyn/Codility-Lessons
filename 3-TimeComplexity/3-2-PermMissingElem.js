function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arraySum = 0
    let sum = 0

    if (A.length === 0){
        return 1
    }

    for (let i=0; i<=A.length; i++){
        sum += i+1
    }

    for (let i=0; i<A.length; i++){
        arraySum += A[i]
    }

    return sum - arraySum
}
