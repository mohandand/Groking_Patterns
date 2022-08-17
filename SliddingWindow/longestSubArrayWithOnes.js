/* 
[1,1,1,0,1,0,1,0,1]

*/
function longestSubString(array,k){
    let startPointer = 0;
    let numberOfOnes = 0;
    let maxLength=0

    for(let i=0;i<array.length;i++){
        if(array[i]===1){
            numberOfOnes++
        }
        if((i-startPointer+1-numberOfOnes)>k){
           if(array[startPointer]==1){
            numberOfOnes--;
           }
            startPointer++
        }
        maxLength = Math.max(maxLength,i-startPointer+1)
    }
    return maxLength;
}
console.log(longestSubString([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],2))