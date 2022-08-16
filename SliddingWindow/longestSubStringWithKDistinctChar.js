function longestSub(str,k){
    let map = {};
    let startPointer = 0;
    let maxLength = 0
    for(let i=0 ;i<str.length;i++){
        let rChar = str[i];
        (map[rChar]) ? map[rChar]++:map[rChar]=1
        while(Object.keys(map).length>k){
            let lChar = str[startPointer];
            map[lChar]--;
            if(map[lChar]==0){
                delete map[lChar]
            }
            startPointer++;
        }
        maxLength = Math.max(maxLength,i-startPointer+1)
    }
    return maxLength
}

console.log(longestSub("cbbebi",3))