var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  // A .left property, a binary search tree (BST) where all values
  // are lower than the current value.
  newTree.left = {};
  // A .right property, a binary search tree (BST) where all values
  // are higher than the current value.
  newTree.right = {};
  _.extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.compareValues = function (input, currentBSTValue) {
  if (input < currentBSTValue) {
    return 'lesser';
  } else if (input > currentBSTValue) {
    return 'greater';
  } else if (input === currentBSTValue) {
    return 'equal';
  } 
};

binaryTreeMethods.insert = function(input) {
  // compare input to bst's value, starting at the top
    // if less than, check if bst.left.hasOwnProperty(value) is false(empty)
      // if false, define bst.left.value as the input
      // if true (implement recursion) compare input to bst.left.value
    // if it's greater go right
  var currentLevel;
  var findPlace = function (currentLevel) {
    if (binaryTreeMethods.compareValues(input, currentLevel.value) === 'lesser') {
      if (currentLevel.left.value === undefined) {
        currentLevel.left = BinarySearchTree(input);
      } else {
        currentLevel = currentLevel.left;
        findPlace(currentLevel);
      }
    } else if (binaryTreeMethods.compareValues(input, currentLevel.value) === 'greater') {
      if (currentLevel.right.value === undefined) {
        currentLevel.right = BinarySearchTree(input);
      } else {
        currentLevel = currentLevel.right;
        findPlace(currentLevel);
      }
    }  
  };
  findPlace(this);  
};

binaryTreeMethods.contains = function(target) {
  var status = false;
  var currentLevel;
  var searchTarget = function(currentLevel) {
    if ( binaryTreeMethods.compareValues(target, currentLevel.value) === 'equal') {
      status = true;
      return;
    } else {
      if (binaryTreeMethods.compareValues(target, currentLevel.value) === 'lesser') {
        currentLevel = currentLevel.left;
        searchTarget(currentLevel);
      } else if (binaryTreeMethods.compareValues(target, currentLevel.value) === 'greater') {
        currentLevel = currentLevel.right;
        searchTarget(currentLevel);
      }
    }
  };
  searchTarget(this);  
  return status;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  // A .depthFirstLog() method, which accepts a callback and executes 
  // it on every value contained in the tree.
  var currentLevel;
  var doFuncEveryLevel = function(currentLevel, cb) {
    // execute cb on currentLevel
    cb(currentLevel.value);
    // check left right status of current
    if (currentLevel.left.value !== undefined) {
      // currentLevel = currentLevel.left;
      // check order 
      doFuncEveryLevel(currentLevel.left, cb);
    }
    if (currentLevel.right.value !== undefined) {
      // currentLevel = currentLevel.right;
      // check order
      doFuncEveryLevel(currentLevel.right, cb);      
    }
    // if exists, cb both
    // recursion
  };
  doFuncEveryLevel(this, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

















