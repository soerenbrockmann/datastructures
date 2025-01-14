class Stack {
  constructor() {
    this.items = [];
  }

  // Push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop an element from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return null;
    }
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print the stack contents
  printStack() {
    console.log(this.items.join(" -> "));
  }
}

// Example Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top Element:", stack.peek()); // Output: 30
stack.pop();
stack.printStack(); // Output: 10 -> 20
