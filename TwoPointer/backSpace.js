var backspaceCompare = function(s, t) {
    return check(s) ===check(t)
};

function check(s){
    let res = [];
    for(let x of s.split('')){
        x=="#"?res.pop():res.push(x)
    }
    return res.join("")
}