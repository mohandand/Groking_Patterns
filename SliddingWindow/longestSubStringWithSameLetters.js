function longestSubString(str,k){
    let startPointer = 0;
    let map = {};
    let maxRepeatingStr = 0;
    let maxLength=0;
    for(let i=0;i<str.length;i++){
        let rightChar = str[i];
        (map[rightChar])?map[rightChar]++:map[rightChar]=1
        maxRepeatingStr = Math.max(maxRepeatingStr , map[rightChar])

        if(i-startPointer+1 - maxRepeatingStr > k){
            let leftChar = str[startPointer];
        map[leftChar]--;
        startPointer++
        }
     maxLength = (maxLength,i-startPointer+1)
    }
    return maxLength;
}
console.log(longestSubString("aabccbb",2))