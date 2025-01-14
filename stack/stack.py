class Stack:
    def __init__(self):
        self.items = []

    # Push an element onto the stack
    def push(self, element):
        self.items.append(element)

    # Pop an element from the stack
    def pop(self):
        if self.is_empty():
            print("Stack Underflow")
            return None
        return self.items.pop()

    # Peek at the top element without removing it
    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.items[-1]

    # Check if the stack is empty
    def is_empty(self):
        return len(self.items) == 0

    # Print the stack contents
    def print_stack(self):
        print(" -> ".join(map(str, self.items)))

# Example Usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print("Top Element:", stack.peek())  # Output: 30
stack.pop()
stack.print_stack()  # Output: 10 -> 20
