function trippletsWithSmallerSum(arr,target){
    arr.sort((a,b)=>a-b);
    let count = 0;
    for(i=0;i<arr.length-2;i++){
        count += search_pair(arr, target-arr[i],i);
    }
    return count;
}

function search_pair(arr,targetSum,first){
    let count=0;
    start = first+1;
    let end = arr.length-1;
    while(start<end){
        if(arr[start]+arr[end]>targetSum){
            count = count+end-start;
            start++
        }else{
            end--;
        }
    }
    return count;
}

console.log(trippletsWithSmallerSum([-1, 0, 2, 3],3));