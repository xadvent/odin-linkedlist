class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        let newNode = new node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        let newNode = new node(value);
        if (this.head == null) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail
    }

    at(index) {
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    pop() {
        let currentNode = this.head;
        let count = 0;
        while (count < this.length - 2) {
            currentNode = currentNode.next;
            count++;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
    }

    contains(value) {
        let currentNode = this.head;
        let count = 0;
        while (count < this.length) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.next;
            count++;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let count = 0;
        while (count < this.length) {
            if (currentNode.value == value) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }
        return null
    }

    toString() {
        let currentNode = this.head;
        let count = 0;
        let str = '';
        while (count < this.length){
            str += `${currentNode.value} -> `;
            currentNode = currentNode.next;
            count++;
        }
        str += 'null'
        return str;
    }

    insertAt(value, index){
        let newNode = new node(value);
        let currentNode = this.head;

        while(index > 1){
            currentNode = currentNode.next;
            index--;
        }
        let temp = currentNode.next;
        currentNode.next = newNode;
        newNode.next = temp;
        this.length++
    }
}

const list = new LinkedList()