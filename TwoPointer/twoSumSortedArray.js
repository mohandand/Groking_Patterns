function twoSum(array ,target){
    let start = 0;
    let end = array.length-1;
    while(start<end){
        let sum = array[start]+array[end];
        if(sum==target){
            return [array[start],array[end]]
        }else if(sum>target){
            end--
        }else{
            start++
        }
    }
    return false;
}

console.log(twoSum([1,2,3,4],7))