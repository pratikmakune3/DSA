let ans = 0

const check = (board: number[][], row: number, col: number) => {
    let dupRow = row
    let dupCol = col
    let n = board[0].length
    while(row >= 0) {
        if(board[row][col] === 1) return false
        row--
    }

    row = dupRow
    col = dupCol
    while(row >= 0 && col >= 0) {
        if(board[row][col] === 1) return false
        row--
        col--
    }

    row = dupRow
    col = dupCol
    while(row >= 0 && col < n) {
        if(board[row][col] === 1) return false
        row--
        col++
    }

    return true
}

const rec = (board: number[][], row: number) => {
    // BC
    if(row === board.length) {
        ans++
        return
    }
    // Pruning

    // choice
    for(let col=0; col<board[0].length; col++) {
        // check
        if(check(board, row, col)) {
            // move ~ place, recurse with next level, unplace

            // 1. place
            board[row][col] = 1
            // 2. recurse with next level
            rec(board, row+1)
            // 3. unplace
            board[row][col] = 0
        }
    }
}

const nQueen = (n: number) => {
    let board: number[][] 
        = new Array(n).fill(null).map(e => new Array(n).fill(0))

    rec(board, 0)
}

nQueen(4)

console.log(ans)
