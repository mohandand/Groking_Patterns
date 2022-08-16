function avgOfContiguousSubArray(array,k){
    let res = [];
    let sum = 0.0;
    let startpointer = 0;
    for(let i=0;i<array.length;i++){
        sum +=array[i];
        if(i>=k-1){
            res.push(sum/k);
            sum -=array[startpointer];
            startpointer++
        }
    }  
    return res   
}

console.log(avgOfContiguousSubArray([1, 3, 2, 6, -1, 4, 1, 8, 2],5))