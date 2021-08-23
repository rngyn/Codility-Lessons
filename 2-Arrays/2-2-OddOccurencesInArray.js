function solution(A) {
    A = A.sort()
    let odd
    
    for (let i=0; i<A.length; i++){
        if (A[i] === A[i+1]) {
            i++
        } else {
            odd = A[i]
        }
    }
    return odd
}
