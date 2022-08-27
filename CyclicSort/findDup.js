/* 
1ton [1,4,3,2,4]
check the number is at its index yes then go to next index

if no = >check the number and its correct index values are not same then swap other wise return
*/

function findDup(array){
    let i = 0;
    while(i<array.length){
        if(array[i] !== i+1){
            let j=array[i]-1
            if(array[i]!==array[j]){
                [array[i],array[j]] =[array[j],array[i]]
            }else{
                return array[i]
            }
        }else{
            i++
        }
    }
    return -1
}
console.log(findDup([1,4,3,2,4]))