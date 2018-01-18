var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enq = 0;
  this.deq = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.enq] = value;
  this.enq++;
};

Queue.prototype.dequeue = function() {
  if(this.enq - this.deq) {
    var beforeDelete = this[this.deq];
    delete this[this.deq];
    this.deq++
    return beforeDelete;
  }
};

Queue.prototype.size = function() {
  return this.enq - this.deq;
};




