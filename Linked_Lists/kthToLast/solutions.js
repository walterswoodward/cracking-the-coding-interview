// Non-Recursive Solution:
class LinkedList {
  constructor(value) {
    this.head = {
      value, // short hand for value: value
      next: null
    };
    // this._length // Having this property and using it would make findNode() less verbose
  }

  insert(value) {
    let current = this.head;
    let newNode = new LinkedList(value);
    console.log(this.head)
    if (current === undefined) {
      this.head = newNode.head;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode.head;
  }
  // Finds kth value where k = 0 is the head node, k=1 is this.head.next etc.
  findNode(k) {
    let current = this.head;
    // console.log(current)
    let counter = 0;
    if (k < 0){
      throw new Error("No nodes at given position")
    } else if (k === 0) {
      return this.head;
    } else {
      while (counter !== k){
        console.log(counter)
        counter++
        current = current.next
      }
      
    }
    if (current === undefined){
      throw new Error("No nodes at given position")
    }
    return current
  }
}

const keyCombinationSeq = new LinkedList(1493827);
keyCombinationSeq.insert(27453896);
keyCombinationSeq.insert(19673520)
keyCombinationSeq.insert(83649956)
console.log(keyCombinationSeq.findNode(0))

// console.log(keyCombinationSeq);
