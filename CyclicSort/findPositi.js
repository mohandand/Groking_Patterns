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
        if(num[i]!==i+1){
            return i+1
        }
    }
}
conaole.log(findPos)