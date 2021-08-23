function solution(A, K) {
    K = K % A.length
    for (let i=0; i<K; i++){
      A.unshift(A.pop())  
    }
    return A
}
