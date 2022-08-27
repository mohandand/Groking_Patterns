function findMisNum(array){
    let i = 0;
    
    while(i<array.length){
        let j = array[i];
        if(array[i]<array.length && array[i] !==array[j]){
            [array[i],array[j]] =[array[j],array[i]]
        }else{
            i++
        }
    } 
console.log(array)
  for(i=0;i<array.length;i++){
    if(array[i]!== i){
        return i
    }
  }
  return array.length;
}

console.log(findMisNum([3,2,1,0,5]))