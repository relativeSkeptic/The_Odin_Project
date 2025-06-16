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
        let mid = start + Math.floor((end - start)) / 2;

        ///Create new node
        let node = new Node(data[mid]);

        ///Use recursion for subtrees
        node.left = this.convertToBST(data, start, mid - 1);
        node.right = this.convertToBST(data, mid + 1, end);

        ///Return the node
        return node;
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

    preOrder(root) {
        if(root === null) {
            return;
        }
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
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
        this.preOrder(this.root);
    }

    //Removes duplicate values from an array
    removeDuplicates(data) {
        //Set only stores unique values so we 
        //are leveraging that to remove duplicates
        return [...new Set(data)];
    }
}