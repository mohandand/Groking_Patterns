function fruitsIntoBasket(fruits){
        let startPointer = 0;
        let map = {};
        let maxFruits = 0;
        for(let i=0;i<fruits.length;i++){
            let rightChar = fruits[i];
            (map[rightChar])? map[rightChar]++ : map[rightChar]=1
            while(Object.keys(fruits).length>2){
                let leftChar = fruits[startPointer];
                map[leftChar]--;
                if(map[leftChar]==0){
                    delete map[leftChar]
                }
            }
            maxFruits = Math.max(maxFruits,i-startPointer+1)
        }
        return maxFruits
}

console.log(fruitsIntoBasket(['A', 'B', 'C', 'B', 'B', 'C']))