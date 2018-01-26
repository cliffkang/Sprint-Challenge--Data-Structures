// A special array class that can only store the number of items specified by the `limit` argument
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  // iterates over each item in the linked list
  each(cb) {
    let node = this.head;
    while (node !== null) {
      cb(node.value);
      node = node.next;
    }
  }

  // gets the value of the node at the i-th index
  get(index) {
    if (this.head === null) return;
    let node = this.head;
    let count = 0;
    while (count <= index) {
      if (count === index) return node.value;
      count++;
      if (node.next === null) this.addToTail([]);
      node = node.next;
    }
    return;
  }

  // gets the number of nodes in the linked list
  get length() {
    let node = this.head;
    let count = 0;
    while (node !== null) {
      count++;
      node = node.next;
    }
    return count;
  }

  // at the given index, sets the value at that node
  set(index, value) {
    if (!this.head) this.addToTail([]);
    let node = this.head;
    let count = 0;
    while (count <= index) {
      if (count === index) {
        node.value = value;
        return;
      }
      count++;
      if (node.next === null) this.addToTail([]);
      node = node.next;
    }
  }
  addToTail(values) {
    const newNode = {
      next: null,
      value: values,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) return;
    if (this.head.next === null) {
      const head = this.head.value;
      this.head = null;
      this.tail = null;
      return head;
    }
    const val = this.head.value;
    this.head = this.head.next;
    return val;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

/* eslint-disable no-bitwise, operator-assignment */
// This is hash function you'll be using to hash keys
// There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
// on the given `str` arg (the key) modded by the limit of the limited array
// This simply ensures that the hash function always returns an index that is within the boundaries of the limited array
const getIndexBelowMax = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = {
  LinkedList,
  getIndexBelowMax,
};
