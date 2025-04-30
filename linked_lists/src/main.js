import "./styles.css";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        console.log('Appending ' + newNode.value + ' to list.');
    }

    prepend(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
      
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
          }
        currentNode.next = newNode;
        console.log('Prepending ' + newNode.value + ' to list.');
    }

    size() {
        let size = 0;
        let currentNode = this.head;

        while(currentNode.next != null) {
            currentNode = currentNode.next;
            size++;
        }

        return size;
    }

    start() {
        return this.head.value;
    }

    end() {
        let currentNode = this.head;
        while(currentNode.next != null) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    at(index) {
        let currentNode = this.head;
        for(let i = 0; i < this.size(); i++) {
            if(i === index) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
    }

    pop() {
        let currentNode = this.head;
        for(let i = 0; i < this.size(); i++) {
            if(i === this.size() - 1) {
                currentNode.next = null;
            }
            currentNode = currentNode.next;
        }
    }

    contains(value) {
        let currentNode = this.head;
        while(currentNode.next != null) {
            if(currentNode.value === value) {
                console.log('List contains value ' + value);
                return true;
            }
            currentNode = currentNode.next;
        }
        console.log('List does not contain value ' + value)
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while(currentNode != null) {
            if(currentNode.value === value) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return null;
    }

    toString() {
        let currentNode = this.head;
        let outputArray = [];
        while(currentNode != null) {
            outputArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(outputArray);
    }

    insertAt(value, index) {
        let newNode = new Node(value);
        let currentNode = this.head;
        let tempNode = null;
        for(let i = 0; i < this.size(); i++) {
            if(i === index - 1) {
                tempNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        for(let i = 0; i < this.size(); i++) {
            if(i === index) {
                tempNode.next = newNode;
                newNode.next = currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    removeAt(index) {
        let currentNode = this.head;
        let tempNode = null;
        for(let i = 0; i < this.size(); i++) {
            if(i === index + 1) {
                tempNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        for(let i = 0; i < this.size(); i++) {
            if(i === index - 1) {
                currentNode.next = tempNode;
            }
            currentNode = currentNode.next;
        }
    }
}

class Node {
    constructor(data = null) {
        this.value = data;
        this.next = null;
    }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(4);
list.prepend(5);
list.prepend(6);

console.log('List size is: ' + list.size());
console.log('List head is: ' + list.start());
console.log('List tail is: ' + list.end());

console.log('Item in list at index 3 is: ' + list.at(3));

list.toString();

list.pop();

list.toString();

list.contains(2);
list.contains(8);

console.log(list.find(5));

list.removeAt(4);

list.toString();

list.insertAt(50, 2);

list.toString();