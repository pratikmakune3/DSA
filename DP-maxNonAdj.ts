/*
    recursion -> tabulation
    
    1. declare dp array with the same size as of memoization
    2. init dp array with base cases value
    3. for recursive cases - declare for loop (exclude BCs form for loop)
    4. convert recurive function calls -> dp[i]
    5. return dp[n]
*/

// recurison meaning - return the max sum until index
const maxSumNonAdjUtilRecursive = (arr: number[], index: number): number => {
    if(index === 0) return arr[0]
    // don't write index < 0 BC here... instead handle in recursive case in pick -> index>1
    // this simplifies tabulation reasoning and code...

    let noPick = maxSumNonAdjUtilRecursive(arr, index-1)
    let pick = 0
    if(index > 1) pick = arr[index] + maxSumNonAdjUtilRecursive(arr, index-2)

    return Math.max(pick, noPick)
}

const maxSumNonAdjUtilMemo = (arr: number[], index: number, dp: number[]): number => {
    if(index === 0) return arr[0]

    if(dp[index] !== -1) return dp[index]

    let noPick = maxSumNonAdjUtilMemo(arr, index-1, dp)
    let pick = 0
    if(index > 1) pick = arr[index] + maxSumNonAdjUtilMemo(arr, index-2, dp)

    return dp[index] = Math.max(pick, noPick)
}

const maxSumNonAdjUtilTabulation = (arr: number[], index: number, dp: number[]): number => {
    dp[0] = arr[0]

    for(let i=1; i<=index; i++) {
        let noPick = dp[i-1]
        let pick = 0
        if(i > 1) pick = arr[i] + dp[i-2]
        dp[i] = Math.max(pick, noPick)
    }

    return dp[index]
}

const maxSumNonAdj = (arr: number[]) => {
    let n = arr.length-1
    let dp = new Array(n+1).fill(-1)
    // let result = maxSumNonAdjUtilRecursive(arr, n)
    // let result = maxSumNonAdjUtilMemo(arr, n, dp)
    let result = maxSumNonAdjUtilTabulation(arr, n, dp)
    console.log(result)
}

maxSumNonAdj([10,20,30,10,5,10])
