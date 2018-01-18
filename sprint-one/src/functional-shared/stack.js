var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	count: 0
  };
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
	this[this.count] = value;
	this.count += 1;
};
stackMethods.pop = function() {
	this.count -= 1;
	return this[this.count];
};
stackMethods.size = function() {
	if (this.count < 0) {
		return 0;
	}
	return this.count;
};

