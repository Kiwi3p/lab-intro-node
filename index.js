class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    //this.length++;
    this.items.sort((a,b) => {
      return a - b;
    });
    this.length = this.items.length
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error('OutOfBounds');
    } else {
    
    //console.log(this.items[pos]);  
    return this.items[pos];
    }
  }

  max() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    
    console.log(this.items[this.items.length-1]);  
    return this.items[this.items.length-1];
    }
  }

  min() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    
    console.log(this.items[0]);  
    return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    return (this.items.reduce((a, b) => a + b, 0)/this.items.length)
    }
  }
}

module.exports = SortedList;

let sortedList = new SortedList();

let OutOfBounds = "Out of Bounds"

sortedList.add(1);
sortedList.add(3);
sortedList.add(2);
console.log(sortedList);

sortedList.get(1);
sortedList.max();

