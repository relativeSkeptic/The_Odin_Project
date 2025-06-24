import "./styles.css";

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor (array) {
        this.root = this.buildTree(array);
    }

    //Takes an array and converts it into a balanced BST
    buildTree(data) {
        //Remove duplicates from the array
        data = this.removeDuplicates(data);

        //Sort the array
        data.sort(function(a, b){return a - b});

        //Converts the sorted array into a BST
        let rootNode = this.convertToBST(data, 0, data.length - 1);

        //Returns the initial root node of the BST
        return rootNode;
    }

    //Recursive function to convert sorted array to BST
    convertToBST(data, start, end) {
        //Check to ensure that recursion needs to continue
        if (start > end) {
            return null;
        }
        
        //Get mid point of array
        let mid = start + Math.floor((end - start) / 2);

        ///Create new node
        let node = new Node(data[mid]);

        ///Use recursion for subtrees
        node.left = this.convertToBST(data, start, mid - 1);
        node.right = this.convertToBST(data, mid + 1, end);

        ///Return the node
        return node;
    }

    //Inserts a given value in the BST
    insert(data, node = this.root) {
        //Checks if node is null
        //If node is null put new node here
        if (node === null) {
            return new Node(data);
        }

        //Checks for duplicate
        //If duplicate value the no insertion occurs  
        if (node.data === data)
        {
            return node;
        }

        //Checks if node is less than or greater than insertion node
        if (data < node.data)
        {
            node.left = this.insert(data, node.left);
        }
        else if (data > node.data)
        {
            node.right = this.insert(data, node.right);
        }

        return node;
    }

    //Deletes a given value from the BST
    delete(data) {

    }

    //Returns the node with the given value
    find(data, node = this.root) {
        //Check if node is null or contains wanted value
        if (node === null || node.data === data) {
            return node;
        }

        //Checks if the value is greater or less than the 
        //value we are searching for
        if (node.data < data)
            return this.find(data, node.right);
        else {
            return this.find(data, node.left);
        }
    }

    levelOrder(callback) {

    }

    inOrder(callback) {

    }

    preOrder(root) {

    }

    postOrder(callback) {

    }

    //Returns height of node at a given value
    height(value) {

    }

    //Returns depth of node at a given value
    depth(value) {

    }

    //Returns true if tree is balanced, and false if it isn't
    isBalanced() {

    }

    //Rebalance an unbalanced BST
    rebalance(data) {

    }

    //Logs BST onto command line
    logTree() {
        prettyPrint(this.root);
    }

    //Removes duplicate values from an array
    removeDuplicates(data) {
        //Set only stores unique values so we 
        //are leveraging that to remove duplicates
        return [...new Set(data)];
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };