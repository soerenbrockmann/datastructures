
class Queue:
    def __init__(self):
        self.items = []

    # Enqueue an element at the rear of the queue
    def enqueue(self, element):
        self.items.append(element)

    # Dequeue an element from the front of the queue
    def dequeue(self):
        if self.is_empty():
            print("Queue Underflow")
            return None
        return self.items.pop(0)

    # Peek at the front element without removing it
    def peek(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.items[0]

    # Check if the queue is empty
    def is_empty(self):
        return len(self.items) == 0

    # Print the queue contents
    def print_queue(self):
        print(" -> ".join(map(str, self.items)))

# Example Usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print("Front Element:", queue.peek())  # Output: 10
queue.dequeue()
queue.print_queue()  # Output: 20 -> 30
