function CyclicSort(array){
    let i=0;
    while(i<array.length){
        let j = array[i]-1;
        if(array[i] !==array[j]){
            [array[i],array[j]] =[array[j],array[i]]
        }else{
            i++
        }
    }
    return array
}

console.log(CyclicSort([2,1,4,6,3,5]))