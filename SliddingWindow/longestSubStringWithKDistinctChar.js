// function longestSub(str,k){
//     let map = {};
//     let startPointer = 0;
//     let maxLength = 0
//     for(let i=0 ;i<str.length;i++){
//         let rChar = str[i];
//         (map[rChar]) ? map[rChar]++:map[rChar]=1
//         while(Object.keys(map).length>k){
//             let lChar = str[startPointer];
//             map[lChar]--;
//             if(map[lChar]==0){
//                 delete map[lChar]
//             }
//             startPointer++;
//         }
//         maxLength = Math.max(maxLength,i-startPointer+1)
//     }
//     return maxLength
// }

// console.log(longestSub("cbbebi",3))

/* 
cebbebi 3 distinct charcters

->first loop through str and add it object as key and value

->check keys length is equal or greater given k value then 

remove decrese first key value and if its equal to zero remove it and increst left pointer

*/

function longestSub(str,k){
    let maxLength = 0;
    let startPointer=0;
    let map = {}

    for(let i=0;i<str.length;i++){
        let rightChar = str[i];
        (map[rightChar])? map[rightChar]++ : map[rightChar] =1;

        while(Object.keys(map).length>k){
            let leftChar = str[startPointer]
            map[leftChar]--
            if(map[leftChar]==0){
                delete map[leftChar]
            }
            startPointer++;
        }
        maxLength = Math.max(maxLength ,i-startPointer+1);
    }
 return maxLength
}
console.log(longestSub("cbbebi",3))
