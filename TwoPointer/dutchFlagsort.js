function ducthSort(array){
    let start =0;
    let end = array.length-1;
    let i = 0;
    while(i<end){
        if(array[i]==0){
            [array[i],array[start]] = [array[start],array[i]]
            i++
            start++
        }else if(array[i]==1){
            i++
        }
        else{
            [array[i],array[end]] =[array[end],array[i]]
            end--;
        }
    }
    return array;
}

console.log(ducthSort([2,1,1,2,2,0]))