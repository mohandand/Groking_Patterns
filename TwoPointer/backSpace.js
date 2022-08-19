function backSpace(str1,str2){
    let strEnd1 = str1.length-1;
    let strEnd2 = str2.length-1;

    while(strEnd1>=0 || strEnd2>=0){
        if(str1[strEnd1] =='#'){
            strEnd1 = strEnd1+2
        }
        if(str2[strEnd2] =='#'){
            strEnd2 = strEnd2+2
        }
        if(strEnd1 !== strEnd2){
            return false;
        }
    }

}