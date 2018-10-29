// Note to self: By far the best way to visualize and error check these lists is
// to gradually build the LinkedList using the methods you have built and
// console.log the results to ensure they are all correct.

/* CLASS */
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
  }

  insert(value) {
    let current = this.head;
    let newNode = new LinkedList(value);

    // If this.head.value is undefined e.g. LinkedList exists but is EMPTY
    if (current.value === undefined) {
      this.head = newNode.head;
    }
    // if LinkedList is NOT empty
    while (current.next) {
      current = current.next;
    }
    current.next = newNode.head;
  }

  checkDups(node) {
    let current = this.head;
    while (current !== node) {
      if (current.value === node.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  removeDups() {
    let current = this.head;
    while (current !== null) {
      if (current.next !== null && this.checkDups(current.next)) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return this.head;
  }
}

const grades = new LinkedList();
grades.insert(5);
grades.insert(5);
grades.insert(6);
grades.insert(6);
grades.insert(7);
grades.insert(7);
grades.insert(7);
grades.insert(7);
grades.removeDups()
console.log(grades.head);