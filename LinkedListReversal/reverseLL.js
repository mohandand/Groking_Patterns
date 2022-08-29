class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function revLL(head){
    let current = head;
    let pre = null;
    while(current!==null){
        let nextelment = current.next;
        current.next = pre;
        pre = current;
        current = nextelment;
    }
    var current1 = d;
    while(current1!==null){
        console.log(current1.val);
        current1 = current1.next
    }
}

console.log(revLL(a))