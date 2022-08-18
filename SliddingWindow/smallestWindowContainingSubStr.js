function smallestSubStr(str,pattern){
    let startPointer = 0;
    let patternFrequ = {};
    let minLength = str.length-1;
    let subStrStart = 0;
    let matched=0;

    //record char frequency of pattern
    for(let i=0;i<pattern.length;i++){
        (patternFrequ[pattern[i]]) ? (patternFrequ[pattern[i]])++:patternFrequ[pattern[i]]=1
    }

    //check if pattern is matched with str

    for(let i=0;i<str.length;i++){
        let rightChar = str[i];

        if(rightChar in patternFrequ){
            patternFrequ[rightChar] -=1;

            if(patternFrequ[rightChar]>0){
                matched++
            }

        }
while(matched == pattern.length){
    if(minLength>i-startPointer+1){
        minLength = i-startPointer+1
        subStrStart = startPointer
    }
}

    }

}