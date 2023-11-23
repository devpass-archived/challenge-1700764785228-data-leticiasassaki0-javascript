const { Stack, Queue, LinkedList } = require('./dataStructures');

test('Stack operations', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.peek()).toBe(3);
  expect(stack.pop()).toBe(3);
  expect(stack.isEmpty()).toBe(false);
});

test('Queue operations', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.peek()).toBe(1);
  expect(queue.dequeue()).toBe(1);
  expect(queue.isEmpty()).toBe(false);
});

test('Linked List operations', () => {
  const linkedList = new LinkedList();
  linkedList.insertAtHead(1);
  linkedList.insertAtHead(2);
  linkedList.insertAtHead(3);

  expect(linkedList.search(2)).toBe(true);
  expect(linkedList.removeFromHead()).toBe(3);
  expect(linkedList.isEmpty()).toBe(false);
});