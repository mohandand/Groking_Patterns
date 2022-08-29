var minMeetingRooms = function(intervals) {
    // handle edge case
    const iLen = intervals.length;
    if (iLen < 2) return iLen;
    
    intervals.sort((a, b) => a[0] - b[0]);

    const minHeap = new MinHeap();
	// push end time of first sorted interval
    minHeap.insert(intervals[0][1]); 
    let minRooms = 1;
    
    for (let i = 1; i < iLen; i++) {
        // check top of heap for earliest end time.
        // if earliest end time < start time of next meeting, 
        // remove meeting with earliest end time
        if (minHeap.peek() <= intervals[i][0]) {
            // this means the next meeting can take over same meeting room
            const deleted = minHeap.delete();
        }
        
        // add next meeting end time to heap
        minHeap.insert(intervals[i][1]);
        minRooms = Math.max(minRooms, minHeap.size());
    }
    return minRooms;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    // O(logn) time | O(1) space
    insert(node) {
        // add new node to end of heap
        this.heap.push(node);
        // bubble up to find correct position for new node
        this.bubbleUp();
    }
    
    // O(logn) time | O(1) space
    bubbleUp() {
        let currIdx = this.heap.length - 1;
        while (currIdx > 0) {
            let parentIdx = Math.floor((currIdx - 1) / 2);
            // compare curr with parent
            if (this.heap[parentIdx] <= this.heap[currIdx]) break;
            // otherwise swap
            this.swap(parentIdx, currIdx);
            currIdx = parentIdx;
        }
    }
    
    // O(logn) time | O(1) space
    delete() {
        const min = this.heap[0];
        // assign last node to top of heap to retain a complete binary tree
        this.heap[0] = this.heap[this.size() - 1];
        // pop last val
        this.heap.pop();
        // find correct position of top node
        this.bubbleDown();
        return min;
    }
    
    // O(logn) time | O(1) space
    bubbleDown() {
        // init vals
        const heapLen = this.heap.length;
        let currIdx = 0,
            idxToSwap = 0,
            leftIdx = currIdx * 2 + 1;
        
        while (leftIdx < heapLen) {
            // calc right child index
            const rightIdx = leftIdx + 1;
            // determine which child is smaller
            if (rightIdx < heapLen && this.heap[rightIdx] < this.heap[leftIdx]) {
                idxToSwap = rightIdx;
            } else idxToSwap = leftIdx;
            
            // compare vals
            if (this.heap[currIdx] <= this.heap[idxToSwap]) break;
            this.swap(currIdx, idxToSwap);
            currIdx = idxToSwap;
            leftIdx = currIdx * 2 + 1;
        }
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
}