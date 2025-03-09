// Approach 1 - using temp array
const mergeSortedArrays = (
    arr1: number[],
    arr2: number[],
) => {
    let temp = []
    let l = 0, r = 0
    while(l < arr1.length && r < arr2.length) {
        if(arr1[l] <= arr2[r]) {
            temp.push(arr1[l])
            l++
        }else{
            temp.push(arr2[r])
            r++
        }
    }

    while(l < arr1.length) {
        temp.push(arr1[l])
        l++
    }

    while(r < arr2.length) {
        temp.push(arr2[r])
        r++
    }

    console.log(temp)
}

mergeSortedArrays(
    [1,2,3,6,7],
    [4,5,10]
)
