class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b
    });
    this.length = this.items.length;
  }
  get(pos) {
    if (pos <= this.items.length && pos >= 0) {
      return this.items.indexOf(pos);
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = this.items.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (this.sum()) / (this.items.length);
    };
  }
}
  module.exports = SortedList;
