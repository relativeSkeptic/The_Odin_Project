import "./styles.css";

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor (array) {
        this.array = array;
        this.root = null;
    }

    //Takes an array and converts it into a balanced BST
    buildTree(data) {
        //Remove duplicates from the array
        data = this.removeDuplicates(data);

        //Sort the array
        data.sort(function(a, b){return a - b});

        //Converts the sorted array into a BST
        data = this.convertToBST(data);

        //Returns the root node of the BST
        return this.root;
    }

    //Inserts a given value in the BST
    insert(value) {
        //Check if value is already in BST
    }

    //Deletes a given value from the BST
    delete(value) {
        //Check if value is in BST
    }

    //Returns the node with the given value
    find(value) {

    }

    levelOrder(callback) {

    }

    inOrder(callback) {

    }

    preOrder(callback) {

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

    //Logs tree onto command line
    logTree = (node, prefix = '', isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          logTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          logTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      };

    //Removes duplicate values from an array
    removeDuplicates(data) {
        //Set only stores unique values so we 
        //are leveraging that to remove duplicates
        return [...new Set(data)];
    }

    //Recursive function to convert sorted array to BST
    convertToBST(data, start, end) {
        //Check to ensure that recursion needs to continue
        if (start > end) {
            return null;
        }
        
        //Get mid point of array
        let mid = start + (end - start) / 2;
    }
}