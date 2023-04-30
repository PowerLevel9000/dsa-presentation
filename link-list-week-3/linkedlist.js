class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// let node = new Node(55)
// let node1 = new Node(65)
// let node2 = new Node(75)
// let node3 = new Node(85)
// node.next = node1
// node1.next = node2
// node2.next = node3
// console.log(node.next.next.next.next)
class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    
    // inserting node in _linklist
    insert(data) {
        const newNode = new Node(data);
        let current;
        if (!this.head) {
            this.head = newNode;
            this.count++
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode;
            this.count++
        }
    }
    
    // getting value at specific index
    atIndex(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        console.log(`At index ${index} our linkedList have value ${current.value}`)
        return current.value
    }
    
    // getting node at specific index
    nodeAtIndex(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current
    }

    // printing values in our link list in an Array
    print() {
        let lists = []
        let current = this.head;
        if (!this.head) {
            return this.head.value
        } else {
            current = this.head;
            while (current !== null) {
                lists.push(current.value)
                current = current.next
            }
            return lists
        }
    }

    // add data at specific index
    addAtIndex(data, index) {
        let current, remainNode;
        const newNode =  new Node(data);
        current = this.nodeAtIndex(index-1);
        remainNode = current.next
        newNode.next = remainNode
        current.next = newNode
        this.count ++
    }

    // remove data from specific index
    removeAtIndex(index) {
        let current, remainNode, nodeToDelete;
        current = this.nodeAtIndex(index-1);
        nodeToDelete = current.next;
        remainNode =nodeToDelete.next
        current.next = remainNode
    }
}

let list = new LinkedList();
list.insert(25)
list.insert(35)
list.insert(45)
list.insert(55)
list.insert(65)
list.atIndex(3)
list.addAtIndex(10, 3)
list.removeAtIndex(3)

console.log(list.print())
// console.log(list)