const ListNode = require('./ListNode');

class LinkedList {
  constructor(val = null) {
    this.head = val !== null ? new ListNode(val) : null;
    this.length = val !== null ? 1 : 0;
    this.tail = this.head;
  }

  append(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(val);
      this.tail = this.tail.next;
    }
    return ++this.length;
  }

  prepend(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      this.head = new ListNode(val, this.head);
    }

    return ++this.length;
  }

  getNodeAtIndex(index) {
    let count = 0;
    let node = this.head;
    while (count !== index && count < this.length) {
      node = node.next;
      count++;
    }

    return node;
  }

  insert(index, val) {
    if(!index) {
      this.prepend(val);
    } else if (index >= this.length) {
      this.append(val);
    } else {
      let prevNode = this.getNodeAtIndex(index - 1)
      prevNode.next = new ListNode(val, prevNode.next);
      this.length++;
    }
  }

  remove(index) {
    if (!index) {
      if (this.tail === this.head) {
        this.head = this.head.next;
        this.tail = this.tail.next;
      } else {
        this.head = this.head.next;
      }
    } else {
      index = index >= this.length ? this.length - 1 : index;
      const prevNode = this.getNodeAtIndex(index - 1);
      prevNode.next = prevNode.next.next;
    }

    this.length--;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next;

    while (curr) {
      next = curr.next // 2->3->4...
      curr.next = prev; // 1->null
      prev = curr; // 1 -> null
      curr = next // 2->3->4 prepare for next iteration
    }

    this.head = prev;
  }

  printList() {
    let node = this.head;
    let printStr = ''
    while (node) {
      printStr += `${node.val}-->`;
      node = node.next;
    }

    console.log(printStr);
  }
}

const l1 = new LinkedList(1);
const l2 = new LinkedList();

l1.append(100);
l2.append(50);

l1.prepend(3);
l2.prepend('l2 rocks');

l1.insert(5, 'test');
l1.printList();

// l1.remove(2);
// console.dir(l1, {depth: null});
l1.printList();
l1.reverse();
l1.printList()

// console.log('l2: ', l2);


