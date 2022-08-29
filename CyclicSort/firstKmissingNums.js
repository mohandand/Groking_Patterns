/* 

//Do cyclic sort by ingnoring negative and numbers which arary greater than array length

// add missing numbers into array and at the same time add all the elemnents into set to trak of some greater numbers to avoid
*/

function findMisssKNums(array,k){
    let i=0;
    let n =array.length
    while(i<n){
        let j = array[i]-1

        if(array[i]>0 && array[i]<=n && array[i]!==array[j]){
            [array[i],array[j]] =[array[j],array[i]]
        }else{
            i++
        }
    }

    let missingNums = []
    let extraNums = new Set()

    for(let i=0;i<n;i++){
        if(missingNums.length<k){
            if(array[i] !==i+1){
                missingNums.push(i+1)
                extraNums.add(array[i])
            }
        }
    }

    i=1
    while(missingNums.length<k){
        let greateNum = i+n
        if(!extraNums.has(greateNum)){
            missingNums.push(greateNum)
        }
        i+1
    }
    return missingNums
    console.log(array)
}

console.log(findMisssKNums([3,-1,4,5,5],3))