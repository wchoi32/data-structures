var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enq = 0;
  var deq = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enq] = value;
    enq++;
  };

  someInstance.dequeue = function() {
    if(enq - deq) {
      delete storage[deq];
      deq++
      return storage[deq];
    }
  };

  someInstance.size = function() {
    return enq - deq;
  };

  return someInstance;
};
