class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const itemToDelete = this.data[index];
    this.shiftItems(index);
    return itemToDelete;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1]; // last element remains and needs to be deleted
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hey');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(1);
console.log(newArray.get(0));
