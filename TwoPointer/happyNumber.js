function find_happy_number(num){
    let slow = num;
    let fast = num;

    while(true){
        slow = find_sure(slow);
        fast = find_sure(find_sure(slow));
        if(slow==fast){
            break;
        }
    }
    return slow===1
}

function find_sure(num){
    let sum=0;
    while(num>0){
        digit = num%10;
        sum+=digit*digit;
        num = Math.floor(num/10);
    }
    return sum
}

console.log(find_happy_number(23))