function sortedAraySquare(array){
    let start = 0;
    let end =array.length-1;
    let res =[];
    while(start<end){
        let s= array[start]*array[start]
        let e= array[end]*array[end]
        if(s>end){
            res.push(s);
            start++
        }else{
            res.push(e)
            end--
        }
    }
    return res;
}
console.log(sortedAraySquare([-2, -1, 0, 2, 3]))