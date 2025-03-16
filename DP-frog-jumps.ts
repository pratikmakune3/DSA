/*
    recursion -> tabulation
    
    1. declare dp array with the same size as of memoization
    2. init dp array with base cases value
    3. for recursive cases - declare for loop (exclude BCs form for loop)
    4. convert recurive function calls -> dp[i]
    5. return dp[n]
*/

// recurison meaning - return the min energy to jump from index to 0
const frogUtilRecursive = (arr: number[], index: number, dp: number[]): number => {
    if(index === 0) return 0

    let e1 = Math.abs(arr[index] - arr[index-1]) + frogUtil(arr, index-1, dp)
    let e2 = Infinity
    if(index > 1) e2 = Math.abs(arr[index] - arr[index-2]) + frogUtil(arr, index-2, dp)

    return Math.min(e1, e2)
}
 
const frogUtil = (arr: number[], index: number, dp: number[]): number => {
    dp[0] = 0
    for(let i=1; i<=index; i++) {
        let e1 = Math.abs(arr[i] - arr[i-1]) + dp[i-1]
        let e2 = Infinity
        if(i > 1) e2 = Math.abs(arr[i] - arr[i-2]) + dp[i-2]

        dp[i] = Math.min(e1, e2)
    }

    return dp[index]
}

const frogJumps = (arr: number[]) => {
    let n = arr.length-1
    let dp = new Array(n+1).fill(-1)
    let result = frogUtil(arr, n, dp)
    console.log(result)
}

frogJumps([10,20,30,10])
