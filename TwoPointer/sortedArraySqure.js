function sortedAraySquare(array){
    let start = 0;
    let end =array.length-1;
    let n = array.length;
    let res = new Array(n).fill(0);
    let highestsqureIndex=array.length-1;
    while(start<end){
        let s= array[start]*array[start]
        let e= array[end]*array[end]
        if(s>e){
            res[highestsqureIndex] = s;        
            start++
        }else{
            res[highestsqureIndex] = e
            end--
        }
        highestsqureIndex--
    }
    return res;
}
console.log(sortedAraySquare([-2, -1, 0, 2, 3]))