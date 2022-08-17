function permutationInString(str ,pattern){
    let startPointer = 0;
    let charFreq = {};
    let matchCount = 0;

    for(let i = 0;i<pattern.length;i++){
        (charFreq[pattern[i]])?charFreq[pattern[i]]++ : charFreq[pattern[i]]=1;
    }
    for(let j=0;j<str.length;j++){
        let rightChar = str[j];
        if(rightChar in charFreq){
            charFreq[rightChar]--;
            if(charFreq[rightChar]==0){
                matchCount++
            }
        }
        if(Object.keys(charFreq).length === matchCount){
            return true;
        }
        if(j>=pattern.length-1){
            let leftChar = str[startPointer];
            startPointer++;
            if(leftChar in charFreq){
                if(charFreq[leftChar]===0){
                    matchCount--;
                }
                charFreq[leftChar]++
            }
        }
    }
return false;
}

console.log(permutationInString("odicf","dc"));