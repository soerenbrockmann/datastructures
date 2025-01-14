# Stack Data Structure

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the last item added to the stack is the first one to be removed. It is analogous to a stack of plates, where you can only remove or add an item from the top.

## Key Characteristics

1. **LIFO Order**: The last element added is the first one removed.
2. **Single Access Point**: All operations (addition and removal) are performed at the top of the stack.

## Common Operations

- **Push**: Adds an element to the top of the stack.
- **Pop**: Removes the top element from the stack.
- **Peek (or Top)**: Retrieves the top element without removing it.
- **isEmpty**: Checks if the stack is empty.
- **isFull** (optional): Checks if the stack is full (for fixed-size stacks).

## Implementation Methods

- **Array**: A fixed-size stack with a predefined maximum capacity.
- **Linked List**: A dynamic stack that can grow or shrink as needed.
- **Dynamic Array**: Utilizes resizable arrays provided by languages' standard libraries.

## Applications of Stacks

1. **Function Call Management**: Used in call stacks for function calls and returns.
2. **Expression Evaluation**: Parsing and evaluating mathematical expressions.
3. **Backtracking**: Algorithms like solving mazes and undo operations.
4. **Browser History**: Managing backtracking of pages.
5. **Parenthesis Matching**: Validating balanced parentheses in expressions.

## Pros and Cons

### Pros

1. **Simplicity**: Easy to implement and use.
2. **Efficient Operations**: Push and pop operations have a constant time complexity, O(1).
3. **Memory Management**: Useful for managing function calls and recursion.

### Cons

1. **Limited Access**: Only the top element is accessible, restricting flexibility.
2. **Fixed Size (for Array Implementation)**: Requires predefined size, which may lead to wasted space or overflow.
3. **Potential for Overflow/Underflow**: If improperly managed, a stack can exceed its capacity or attempt to pop from an empty stack.

## Example of Stack Operations

### Push

Adding `10`, `20`, and `30` to an empty stack results in:

Stack: [10, 20, 30] (30 is at the top)

### Pop

Removing the top element (`30`) results in:

Stack: [10, 20]
