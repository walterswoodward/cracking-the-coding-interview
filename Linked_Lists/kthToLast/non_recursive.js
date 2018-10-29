// Non-Recursive Solution:
class LinkedList {
  constructor(value) {
    this.head = {
      value, // short hand for value: value
      next: null
    };
    this._length = 1 // Having this property and using it would make findNode() less verbose
  }

  insert(value) {
    let current = this.head;
    let newNode = new LinkedList(value);
    console.log(this.head)
    if (current === undefined) {
      this.head = newNode.head;
      this._length++
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode.head;
    this._length++
  }
  // Finds kth value where k = 1 returns the last node, k=2 returns the second to last node etc.
  findNode(k) {
    let current = this.head;
    // console.log(current)
    let counter = this._length - k;
    if (k < 0 || k >= this._length){
      throw new Error("No nodes at given position")
    } else {
      while (counter !== 0){
        console.log(counter)
        --counter
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
console.log(keyCombinationSeq.findNode(2))
console.log(keyCombinationSeq);
