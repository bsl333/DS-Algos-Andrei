class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    return ++this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    if (index >= this.length) {
      return undefined
    };
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.get(i + 1);
    }
    this.pop();
    return item;
  }
}

const arr = new MyArray();

console.log(arr.push('a'));
arr.push('b');
arr.push('c');
console.log(arr.length)

console.log(arr.delete(3));
console.log(arr);
