var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head = newNode;
    }
  };
  list.removeHead = function() {
    var holdValue = list.head.value;
    list.head = list.head.next;
    return holdValue;
  };

  list.contains = function(target) {
    // Start at head
    var nodeSearched = list.head;
    while (nodeSearched) {
    // check head node if value === target
      if (nodeSearched.value === target) {
        return true;
      } else {
        nodeSearched = nodeSearched.next;
      }
    }
    return false;
    // if true, return true
    // if false, check next node in line
    // We reach the end when 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
