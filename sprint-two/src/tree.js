var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // newTree.children = null;  // fix me
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // search function
  // For loop through children array
  // if children[i].value === target, return true
  // else check child trees for value
  // initialize the function
  var result = false;
  var searchLayer = function(level) {
    if (level.value === target) {
      result = true;
    } else {
      if (level.children.length > 0) {
        for (var i = 0; i < level.children.length; i++) {
          searchLayer(level.children[i]);
        }
      }
    }
  };
  searchLayer(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
