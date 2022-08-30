//Creating claas for bluprint of nodes.

class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

//By doing below assignements i am connecting nodes together accoringly left and right
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

//        a
//      /   \
//     b     c
//    / \      \
//   d    e      f

function minimumDepth(root){
    if(root==null){
        return 0
    }

    let minimumDep = 0;

    let queue = [root]

    while(queue.length>0){
        
        let levelSize = queue.length;
        
        minimumDep += 1

        for(let i=0;i<levelSize;i++){
            let currNode = queue.shift();

            if(currNode.left==null && currNode.right==null){
                return minimumDep
            }

            if(currNode.left!==null){
                queue.push(currNode.left)

            }

            if(currNode.right !== null){
                queue.push(currNode.right)
            }
        }
    }
}

console.log(minimumDepth(a))