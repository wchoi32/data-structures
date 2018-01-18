class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(count) {
  	this.count = 0;
  }

  push (value) {
	this[this.count] = value;
	this.count += 1;
  }

  pop () {
	this.count -= 1;
	return this[this.count];
  };

  size () {
	if (this.count < 0) {
		return 0;
	}
	return this.count;
  }
}


