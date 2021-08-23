function solution(X, Y, D) {
    distance = Y - X
    jumps = distance / D
    numJumps = Math.ceil(jumps)
    return numJumps
}
