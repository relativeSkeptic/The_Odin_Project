import { BST } from "./main";

let array = [1, 1, 7, 4, 23, 23, 8, 9, 4, 3, 5, 7, 7, 9, 67, 6345, 324];

let testTree = new BST(array);

testTree.logTree();

if(testTree.find(1) != null) {
    console.log("FOUND");
}

if(testTree.find(6345) != null) {
    console.log("FOUND");
}

if(testTree.find(99) != null) {
    console.log("FOUND");
}

if(testTree.find("ice cream") != null) {
    console.log("FOUND");
}

testTree.insert(28);
testTree.insert(5000);
testTree.insert(99);
testTree.insert(23);

testTree.logTree();