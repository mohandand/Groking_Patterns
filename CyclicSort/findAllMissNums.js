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

}