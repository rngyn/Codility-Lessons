function solution(A) {
    let arrayOne = A[0]
    let arrayTwo = 0

    for (let i=1; i<A.length; i++){
        arrayTwo += A[i]
    }

    let difference = Math.abs(arrayOne - arrayTwo)

    for (let i=1; i<A.length-1; i++){
        arrayOne += A[i]
        arrayTwo -= A[i]

        if (difference > (Math.abs(arrayOne - arrayTwo))){
            difference = Math.abs(arrayOne - arrayTwo)
        }
    }
    return difference
}
