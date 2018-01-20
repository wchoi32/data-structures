var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  // set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      return true;
    }
  } 
  return false;
};

setPrototype.remove = function(item) {
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      delete this.storage[key];
    }
  }  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
