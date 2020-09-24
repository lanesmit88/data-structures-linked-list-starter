// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(value) {
    const newTail = new Node(value);
    //this.tail.next = newTail;
    if (!this.tail) {
      this.head = newTail;
    } else {
        let thisNode = this.head
        while (thisNode) {
            if (thisNode.next === null) {
                thisNode = newTail;
                this.tail = newTail;
                this.length++;
                return this;
            }
            thisNode = thisNode.next;
        }
    //   this.head.next = newTail;
    }
    // this.tail = newTail;
    // this.length++;
    // return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.length) return undefined;
    this.length--;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {}

  // TODO: Implement the contains method here
  contains(target) {
    let thisNode = this.head;

    while (thisNode) {
      if (thisNode.value === target) {
        return true;
      }
      thisNode = thisNode.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if(index < 0 || index >= this.length) return null;  
      let thisNode = this.head;
      let count = 0;  
      while (thisNode) {
          if (count === index) {
              return thisNode;
          }
          console.log(count);
          thisNode = thisNode.next;
          count ++; 
      }
  }



  // TODO: Implement the set method here
  set(index, val) {}

  // TODO: Implement the insert method here
  insert(index, val) {}

  // TODO: Implement the remove method here
  remove(index) {}

  // TODO: Implement the size method here
  size() {}
}

const yo = new LinkedList();
console.log((yo.addToTail("A")));
console.log((yo.addToTail("B")));
// console.log(yo.get(0));
// console.log(yo.get(1));
// console.log(yo.get(2));
exports.Node = Node;
exports.LinkedList = LinkedList;
