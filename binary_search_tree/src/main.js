import "./styles.css";

class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor (array) {
        this.root = this.buildTree(array);
    }

    //Takes an array and converts it into a balanced BST
    buildTree(value) {
        //Remove duplicates from the array
        value = this.removeDuplicates(value);

        //Sort the array
        value.sort(function(a, b){return a - b});

        //Converts the sorted array into a BST
        let rootNode = this.convertToBST(value, 0, value.length - 1);

        //Returns the initial root node of the BST
        return rootNode;
    }

    //Recursive function to convert sorted array to BST
    convertToBST(value, start, end) {
        //Check to ensure that recursion needs to continue
        if (start > end) {
            return null;
        }
        
        //Get mid point of array
        let mid = start + Math.floor((end - start) / 2);

        ///Create new node
        let node = new Node(value[mid]);

        ///Use recursion for subtrees
        node.left = this.convertToBST(value, start, mid - 1);
        node.right = this.convertToBST(value, mid + 1, end);

        ///Return the node
        return node;
    }

    //Inserts a given value in the BST
    insert(value, node = this.root) {
        //Checks if node is null
        //If node is null put new node here
        if (node === null) {
            return new Node(value);
        }

        //Checks for duplicate
        //If duplicate value the no insertion occurs  
        if (node.value === value)
        {
            return node;
        }

        //Checks if node is less than or greater than insertion node
        if (value < node.value)
        {
            node.left = this.insert(value, node.left);
        }
        else if (value > node.value)
        {
            node.right = this.insert(value, node.right);
        }

        return node;
    }

    //Delete a specified node from the BST
    delete(value, node = this.root) {
        //Base case if node is null return null (end of branch)
        if(node === null) {
            return null;
        }

        //Recursively parse through the BST looking for the value
        if(value < node.value) {
            node.left = this.delete(value, node.left);
        }
        else if(value > node.value) {
            node.right = this.delete(value, node.right);
        }
        //We've found the value we want to delete
        else if (node.value === value) {
            //There are three cases we need to handle: no children, one child, two child

            //If node has no children then we simply return null
            if(node.left === null && node.right === null) {
                return null;
            }
            //The node has two children
            else if(node.left !== null && node.right !== null) {
                //We first need to find the smallest node in right subtree
                let smallNode = this.getSmallestNode(node.right);
                //Assign the value of the smallest node to the current node
                node.value = smallNode.value;
                //Recursively delete the small node from the BST
                node.right = this.delete(smallNode.value, node.right);
            }
            //The node has at least one child
            else if(node.left !== null || node.right !== null) {
                //Determine which is the non-null child and return it to replace the deleted node
                if(node.left !== null) {
                    return node.left;
                }
                else {
                    return node.right;
                }
            }
        }
        return node;
    }

    //Helper function for delete method that returns the smallest child based on the provided node
    getSmallestNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    //Returns the node with the given value
    find(value, node = this.root) {
        //Check if node is null or contains wanted value
        if (node === null || node.value === value) {
            return node;
        }

        //Checks if the value is greater or less than the 
        //value we are searching for
        if (node.value < value)
            return this.find(value, node.right);
        else {
            return this.find(value, node.left);
        }
    }

    //Returns height of a specified node in a BST
    height(value) {
        //Finds our initial node that we are determining the height for
        let heightNode = this.find(value);
        //If the node exists find its height, otherwise return null
        if(heightNode != null) {
            return this.helperHeight(heightNode);
        }
        else {
            return null;
        }
    }

    //Helper function to find height of node in BST
    helperHeight(node) {
        //Our base case, if we progress down the tree until we hit null then
        //we return -1 to account for that edge
        if(node === null) {
            return -1;
        }

        //Recursively determine the height of the left and right trees
        let left = this.helperHeight(node.left);
        let right = this.helperHeight(node.right);

        //Math.max compares the two values and returns the greater values (longer tree) + 1
        return Math.max(left, right) + 1;
    }

    //Returns the depth of a specified node in a BST
    depth(value, node = this.root) {
        //We have two base cases, one if the value is null (end of the tree)
        //Or we find the value we are looking for
        if(node === null) {
            return -1;
        }
        if(node.value === value) {
            return 0;
        }

        //If we don't find the value or a null node then we increment by one
        //and continue searching the nodes children for the value
        let left = this.depth(value, node.left);
        if (left !== -1) {
            return left + 1;
        }

        let right = this.depth(value, node.right);
        if (right !== -1) {
            return right + 1;
        }

        //If the value is not found in either of the subtrees we return -1
        return -1;
    }

    //Returns true if tree is balanced, and false if it isn't
    isBalanced(node = this.root) {
        //Base case is when we reach the edge of a branch
        //Return true because this node is "balanced"
        if(node === null) {
            return true;
        }
        //Now we need to take the height of both the left and right subtrees 
        let leftHeight = this.helperHeight(node.left);
        let rightHeight = this.helperHeight(node.right);

        //Obtain the difference in height between the two subtrees 
        let heightDiff = Math.abs(leftHeight - rightHeight);

        //If the height diff is <= 1 and the other subtrees are balanced return true
        //Otherwise the tree is unbalanced (return false)
        if(heightDiff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)) {
            return true;
        }
        else {
            return false;
        }
    }

    //Rebalance an unbalanced BST
    balanceTree(node = this.root) {
        //First step is to traverse the entire tree and store each value into an array

    }

    //Level-order traversal visits nodes level by level, from top to bottom and left to right.
    levelOrder() {
        let levelOrder = [];
        this.levelOrderHelper(levelOrder);
        return levelOrder; 
    }

    //Helper function for level order to allow for recursive calls
    levelOrderHelper(levelArray, level = 0, node = this.root) {
        //Base case: If Node is null
        if(node === null) {
            return;
        }

        if(levelArray.length <= level) {
            levelArray.push([]);
        }

        levelArray[level].push(node.value);

        this.levelOrderHelper(levelArray, level + 1, node.left);
        this.levelOrderHelper(levelArray, level + 1, node.right);
    }

    //Passing the root, then traverses the left subtree, then traverses the right subtree
    preOrder() {
        let preOrder = [];
        this.preOrderHelper(preOrder);
        return preOrder;
    }

    //Helper function for pre order to allow for recursive calls
    preOrderHelper(preArray, node = this.root) {
        //Base case if we hit a null node return
        if(node === null) {
            return;
        }

        preArray.push(node.value);

        this.preOrderHelper(preArray, node.left);
        this.preOrderHelper(preArray, node.right);
    }

    //left subtree, node, right subtree
    inOrder() {
        let inOrder = [];
        this.inOrderHelper(inOrder);
        return inOrder;
    }

    //Helper function for in order traversal
    inOrderHelper(inOrder, node = this.root) {
        if(node === null) {
            return;
        }

        this.inOrderHelper(inOrder, node.left);
        inOrder.push(node.value);
        this.inOrderHelper(inOrder, node.right);
    }

    //Right subtree, node, left subtree
    postOrder() {
        let postOrder = [];
        this.postOrderHelper(postOrder);
        return postOrder;
    }

    //Helper function for post order traversal
    postOrderHelper(postOrder, node = this.root) {
        if(node === null) {
            return;
        }

        this.postOrderHelper(postOrder, node.right);
        postOrder.push(node.value);
        this.postOrderHelper(postOrder, node.left);
    }

    //Logs BST onto command line
    logTree() {
        prettyPrint(this.root);
    }

    //Removes duplicate values from an array
    removeDuplicates(value) {
        //Set only stores unique values so we 
        //are leveraging that to remove duplicates
        return [...new Set(value)];
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };