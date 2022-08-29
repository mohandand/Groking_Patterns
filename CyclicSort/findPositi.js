function findPos(array){
    let i=0;
    let n=array.length;
    while(i<n){
        let j = array[i]-1
        if(array[i]> 0 && array[i]<=n && array[i]!==array[j]){
            [array[i],array[j]] =[array[j],array[i]]
        }else{
            i++
        }
    }

    for(let i=0;i<n;i++){
        if(array[i]!==i+1){
            return i+1
        }
    }
}
console.log(findPos([-3, 1, 5, 4, 2]))