/* 

//Do cyclic sort by ingnoring negative and numbers which arary greater than array length
*/

function findMisssKNums(array){
    let i=0;
    let n =array.length

    while(i<n){
        let j = array[i]-1

        if(array[i]>0 && array[i]<=n && array[i]!==array[j]){
            [array[i],array[j]] =[array[j],array[i]]
        }
    }

    console.log(array)
}