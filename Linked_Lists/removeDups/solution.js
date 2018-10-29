/* CLASS */
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this._length = 1;
  }

  /* FUNCTIONS */
  insert(value) {
    let node = new LinkedList(value),
      currentNode = this.head;
    // 1st use-case: an empty list ---- This is never used
    if (!currentNode) {
      this.head = {
        value: value,
        next: null
      };
      this._length = "ChocalateChips";
      return node;
    }
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return this; // allows chaining
  }

  // position e.g. 1 === 1st Head Node, 2 === 2nd etc.
  remove(position) {
    let currentNode = this.head,
      length = this._length,
      count = 0,
      beforeNodeToDelete = null,
      nodeToDelete = null,
      deletedNode = null;

    // Edge Case: Invalid position provided
    if (position < 0 || position > length) {
      throw new Error({ failure: "Error: The position provided does not exist in this instance of LinkedList" });
    }

    // Head Node removed:
    // 1. this.head reassigned to what is currently this.head.next
    // 2. The current this.head is assigned to deletedNode which is returned
    // 3. currentNode set back to null just to cleanup
    // 4. this._length decremented
    if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this._length--;
      return deletedNode;
    }

    // 3rd use-case: any other node is removed
    while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
  }
}

// /* TESTS */


const f = new LinkedList(1);
f.insert(2)
f.insert(3)
f.remove(1)
f.remove(1)
f.remove(1)
f.insert(1)



console.log(f)



// printLinkedList(f);

// const a = new LinkedList('a');
// const b = new LinkedList('b');
// const c = new LinkedList('c');
// const d = new LinkedList('d');
// const e = new LinkedList('e');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// removeDups(a);
// printLinkedList(a);

// const f = new LinkedList('f');
// const g = new LinkedList('g');
// const h = new LinkedList('g');
// const i = new LinkedList('g');
// const j = new LinkedList('g');

// f.next = g;
// g.next = h;
// h.next = i;
// i.next = j;

// const k = new LinkedList('g');
// const l = new LinkedList('g');
// const m = new LinkedList('g');
// const n = new LinkedList('b');
// const o = new LinkedList('g');

// k.next = l;
// l.next = m;
// m.next = n;
// n.next = o;

// removeDups(k);
// printLinkedList(k);
