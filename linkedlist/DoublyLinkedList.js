class DoublyNode {
  constructor(val, next = null, previous = null) {
    this.val = val;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head !== null ? new DoublyNode(val) : null
    this.length = head !== null ? 1 : 0
    this.tail = this.head;
  }

  append(val) {
    if(!this.head) {
      this.head = new DoublyNode(val);
      this.tail = this.head;
    } else {
      const newNode = new DoublyNode(val, null, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(val) {
    if(!this.head) {
      this.head = new DoublyNode(val);
      this.tail = this.head;
    } else {
      const newNode = new DoublyNode(val, this.head, null);
      this.head.previous = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, val) {
    if (!index) {
      this.prepend(val);
    } else if (index >= this.length) {
      this.append(val);
    } else {
      const prevNode = this.getNodeAtIndex(index - 1);
      const nextNode = this.getNodeAtIndex(index);
      const newNode = new DoublyNode(val, prevNode.next, prevNode);

      prevNode.next = newNode;
      nextNode.previous = newNode;
      this.length++;
    }
  }

  remove(index) {
    if (!index) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      index = index >= this.length ? this.length - 1 : index;
      const prevNode = this.getNodeAtIndex(index - 1);
      const nextNode = this.getNodeAtIndex(index + 1);
      prevNode.next = nextNode;
      if (nextNode) {
        nextNode.previous = prevNode;
      }
    }

    this.length--;
  }

  getNodeAtIndex(index) {
    if (index >= this.length) {
      return null;
    }
    let node;
    if (index <= Math.floor(this.length / 2)) {
      node = this._iterate(this.head, 'next', index)
    } else {
      node = this._iterate(this.tail, 'previous', this.length - 1 - index);
    }
    return node;
  }

  _iterate(startNode, direction, count) {
    while (count !== 0) {
      startNode = startNode[direction];
      count--;
    }

    return startNode;
  }

  printList() {
    let printStr = '';
    let node = this.head;
    while (node) {
      printStr += `${node.val}<-->`;
      node = node.next;
    }

    console.log(`${printStr}${node}`);
  }

  printReverse() {
    let node = this.tail;
    let printStr = `${node.next}<--`;
    while (node) {
      printStr += `${node.val}<-->`
      node = node.previous;
    }

    console.log(printStr);
  }
}

const d1 = new DoublyLinkedList();

d1.append(1);
d1.append(5);
d1.append(7);
d1.prepend('first!')
d1.printList();
d1.insert(5, 100);
d1.printList()
d1.remove(0);
d1.remove(3);
d1.insert(1, 10)
d1.remove(2);
d1.printList()
d1.printReverse()
