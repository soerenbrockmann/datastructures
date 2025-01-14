# Queue Data Structure

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means that the first item added to the queue is the first one to be removed. It is analogous to a queue of people waiting in line, where the person who comes first is served first.

## Key Characteristics

1. **FIFO Order**: The first element added is the first one removed.
2. **Two Access Points**: Elements are added at the rear (enqueue) and removed from the front (dequeue).

## Common Operations

- **Enqueue**: Adds an element to the rear of the queue.
- **Dequeue**: Removes the front element from the queue.
- **Peek (or Front)**: Retrieves the front element without removing it.
- **isEmpty**: Checks if the queue is empty.
- **isFull** (optional): Checks if the queue is full (for fixed-size queues).

## Implementation Methods

- **Array**: A simple and straightforward implementation.
- **Linked List**: A dynamic implementation for queues with unlimited size.

## Applications of Queues

1. **Task Scheduling**: Managing processes in an operating system.
2. **Breadth-First Search (BFS)**: Used in graph and tree traversals.
3. **Printing Tasks**: Manages jobs sent to a printer.
4. **Message Queues**: Used in communication systems.

## Pros and Cons

### Pros

1. **Fair Order**: Processes elements in the order they arrive.
2. **Efficient Operations**: Enqueue and dequeue have constant time complexity, O(1) (for linked list implementations).
3. **Versatile**: Suitable for many real-world scenarios like scheduling and resource sharing.

### Cons

1. **Limited Access**: Only the front and rear elements are accessible.
2. **Fixed Size (for Array Implementation)**: Requires predefined size, leading to potential wastage or overflow.

## Example of Queue Operations

### Enqueue

Adding `10`, `20`, and `30` to an empty queue results in:

Queue: [10, 20, 30]

### Dequeue

Removing the front element (`10`) results in:

Queue: [20, 30]
