class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class NodeList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode
  }
  headNode() {
    console.log(this.head);
  }
  tailNode() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    console.log(current)
  }
  pop() {
    if (this.head === null) return null;

    if (this.head.next === null) {
      const node = this.head;
      this.head = null;
      return node;
    }

    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }

    const node = current.next;
    current.next = null;
    return node;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++
      current = current.next;
    }
    console.log(count)
  }
  at(index) {
    let count = 0;
    let value;
    let current = this.head;
    while (current !== null) {
      if (count == index) {
        value = current;
      }
      count++
      current = current.next;
    }
    console.log(value)
  }
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value == value) {
        console.log(true)
        return;
      }
      current = current.next;
    }
    console.log(false)
  }
  find(value) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (current.value == value) {
        console.log(count)
        return;
      }
      count++
      current = current.next;
    }
    console.log(null)
  }
}

let list = new NodeList();

list.append(10)
list.append(20)
list.append(30)
list.prepend(40)
list.headNode()

console.log(list)
list.tailNode()
list.pop()
console.log(list)
list.tailNode()
list.size()
list.at(0)
list.contains(40)
list.find(10)

