const fibUtil = (n: number, dp: number[]): number => {
    // Recursive ->
    // if(n <= 1) return n
    // if(dp[n] !== -1) return dp[n]
    // return dp[n] = fibUtil(n-1, dp) + fibUtil(n-2, dp)

    // Tabulation ->
    dp[0] = 0, dp[1] = 1
    for(let i=2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}

const fib = (n: number) => {
    // Note - n+1 if it's set wrong the final ans will be wrong.
    let dp = new Array(n+1).fill(-1)
    return fibUtil(n, dp)
}

console.log(fib(5))
