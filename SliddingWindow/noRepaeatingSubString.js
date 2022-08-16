function noRepeatingSubString(str){
    let startPointer = 0;
    let map = {};
    let maxLength = 0;

    for(let i=0;i<str.length;i++){
        let rightChar = str[i];
        if(rightChar in map){
            startPointer = Math.max(startPointer,map[rightChar]+1);
        }
        map[rightChar] = i;
        maxLength = Math.max(maxLength,i-startPointer+1)
    }
    return maxLength
}

console.log(noRepeatingSubString("aabccbb"))