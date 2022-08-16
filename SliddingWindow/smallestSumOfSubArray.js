function smallestSumOfSubArray(array,k){
  let minLength = Infinity;
  let sum = 0;
  let startPointer=0;
  for(let i=0;i<array.length;i++){
    sum +=array[i];
    while(sum>=k){
        minLength = Math.min(minLength,i-startPointer +1)
        sum -=array[startPointer]
        startPointer++
    }
  }
  if(minLength===Infinity) return 0;
  return minLength
}

console.log(smallestSumOfSubArray([2, 1, 5, 2, 3, 2],7))