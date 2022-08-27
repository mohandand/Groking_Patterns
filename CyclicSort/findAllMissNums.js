function findAllMissNums(array){
    let i=0;
    while(i<array.length){
        let j = array[i]-1
        if(array[i] !==array[j]){
            [array[i],array[j]] =[array[j],array[i]]
        }else{
            i++
        }
    }
console.log(array)
    let missingNums=[];

    for(let i=0;i<array.length;i++){
        if(array[i] !== i+1){
            missingNums.push(i+1)
        }
    }
return missingNums
}
console.log(findAllMissNums([2, 3, 1, 8, 2, 3, 5, 1]))