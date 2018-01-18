class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(enq, deq) {
  	this.enq = 0;
  	this.deq = 0;
  }
  enqueue (value) {
    this[this.enq] = value;
    this.enq++;
  };

  dequeue () {
    if(this.enq - this.deq) {
      var beforeDelete = this[this.deq];
      delete this[this.deq];
      this.deq++
      return beforeDelete;
    }
  };

  size () {
    return this.enq - this.deq;
  };

}
