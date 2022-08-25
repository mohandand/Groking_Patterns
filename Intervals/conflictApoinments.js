function conflictAppoinments(intervals){
    intervals.sort((a,b)=>a[0]-b[0])
    for(let i=1;i<intervals.length;i++){
        let currInterval = intervals[i]
        let prevInterval = intervals[i-1];
        if(currInterval[0]<prevInterval[1]||currInterval[0]==prevInterval[0]){
            return false
        }
    }
    return true;
}

console.log(conflictAppoinments([[4,5], [2,3], [3,6]]))