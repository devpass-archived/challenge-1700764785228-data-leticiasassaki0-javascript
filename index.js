const { Stack, Queue, LinkedList } = require('./dataStructures');

// Create a stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack:', stack);

// Create a queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Queue:', queue);

// Create a linked list
const linkedList = new LinkedList();
linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);
console.log('Linked List:', linkedList);