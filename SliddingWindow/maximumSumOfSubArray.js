function maximumSumSubArray(array,k){
    let maxSum = 0;
    let startPointer = 0;
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum +=array[i];
        if(i>=k-1){
            maxSum = Math.max(sum,maxSum)
            sum -=array[startPointer];
            startPointer++;
        }
    }
    return maxSum
}

console.log(maximumSumSubArray([2, 1, 5, 1, 3, 2],3))