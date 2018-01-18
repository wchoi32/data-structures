class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = this;
  }

  canEditEverything() { 
  	Stack.push = function(value) {
		this[this.count] = value;
		this.count += 1;
	};
	Stack.pop = function() {
		this.count -= 1;
		return this[this.count];
	};
	Stack.size = function() {
		if (this.count < 0) {
			return 0;
		}
		return this.count;
	};
  }
}


