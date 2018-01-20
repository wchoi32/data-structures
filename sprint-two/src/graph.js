

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create an object for each node
  // store value inside each new node
  this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      this.storage.splice(i, 1);
    }
  }
  delete this.edges[node];
  for (var prop in this.edges) {
    for (var j = 0; j < this.edges[prop].length; j++) {
      if (this.edges[prop][j] === node) {
        this.edges[prop].splice(j, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if (fromNode.edges[toNode] === toNode && toNode.edges[fromNode] === fromNode) {
  //   return true;
  // }
  // return false;
  if (this.edges[fromNode]) {
    for (var i = 0; i < this.edges[fromNode].length; i++) {
      if (this.edges[fromNode][i] === toNode) {
        return true;
      }
    }
  }

  if (this.edges[toNode]) {
    for (var j = 0; j < this.edges[toNode].length; j++) {
      if (this.edges[toNode][j] === fromNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.edges[fromNode]) {
    this.edges[fromNode] = [];
  }
  if (!this.edges[toNode]) {
    this.edges[toNode] = [];
  }
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode) {
      this.edges[fromNode].splice(i, 1);
    }
  }
  for (var j = 0; j < this.edges[toNode].length; j++) {
    if (this.edges[toNode][j] === fromNode) {
      this.edges[toNode].splice(j, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


