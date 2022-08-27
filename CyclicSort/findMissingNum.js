function findMisNum(array){
    let i = 0;
    let j = array[i]-1;
    while(i<array.length){
        if(array[i] !==array[j]){
            [array[i],array[j]] =[array[j],array[i]]
        }else{
            i++
        }
    } 

  for(i=0;i<array.length;i++){
    if(array[i]!== i){
        return i
    }
  }
  return array.lenght;
}

console.log(findMisNum)