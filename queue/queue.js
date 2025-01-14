class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue an element at the rear of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return null;
    }
    return this.items.shift();
  }

  // Peek at the front element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print the queue contents
  printQueue() {
    console.log(this.items.join(" -> "));
  }
}

// Example Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front Element:", queue.peek()); // Output: 10
queue.dequeue();
queue.printQueue(); // Output: 20 -> 30
