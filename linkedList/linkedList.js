class Node {
  constructor(data) {
    this.data = data; // Data the node stores
    this.next = null; // Pointer to the next node, initially null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Initially, the list is empty, so head is null
  }

  // Method to insert a new node at the end of the list
  append(data) {
    const newNode = new Node(data); // Create a new node
    if (!this.head) {
      // If the list is empty, make the new node the head
      this.head = newNode;
      return;
    }

    let lastNode = this.head;
    while (lastNode.next) {
      // Traverse to the last node
      lastNode = lastNode.next;
    }
    lastNode.next = newNode; // Make the last node point to the new node
  }

  // Method to insert a new node at the beginning of the list
  prepend(data) {
    const newNode = new Node(data); // Create a new node
    newNode.next = this.head; // Make the new node point to the current head
    this.head = newNode; // Update the head to the new node
  }

  // Method to insert a new node at a specific position
  insertAt(data, position) {
    if (position === 0) {
      // If inserting at the start
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    // Traverse to the position where the node should be inserted
    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("Position out of bounds");
      return;
    }

    newNode.next = current.next; // Link the new node to the next node
    current.next = newNode; // Link the current node to the new node
  }

  // Method to delete the first node of the list
  deleteFirst() {
    if (!this.head) {
      return; // If the list is empty, nothing to delete
    }
    this.head = this.head.next; // Make the head point to the next node
  }

  // Method to delete the last node of the list
  deleteLast() {
    if (!this.head) {
      return; // If the list is empty, nothing to delete
    }

    if (!this.head.next) {
      // If there is only one node
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      // Traverse to the second-to-last node
      current = current.next;
    }
    current.next = null; // Remove the last node
  }

  // Method to delete a node at a specific position
  deleteAt(position) {
    if (!this.head) {
      return; // If the list is empty, nothing to delete
    }
    if (position === 0) {
      // If deleting the first node
      this.deleteFirst();
      return;
    }

    let current = this.head;
    let count = 0;

    // Traverse to the node before the one to be deleted
    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (!current || !current.next) {
      console.log("Position out of bounds");
      return;
    }

    current.next = current.next.next; // Remove the node at the specified position
  }

  // Method to display all elements of the linked list
  display() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "None";
    console.log(result);
  }

  // Method to search for a value in the linked list
  search(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        console.log(`Value ${value} found at position ${index}`);
        return;
      }
      current = current.next;
      index++;
    }

    console.log(`Value ${value} not found in the list.`);
  }
}

// Create a LinkedList instance
const linkedList = new LinkedList();

// Perform basic operations
linkedList.append(10); // Add 10 to the list
linkedList.append(20); // Add 20 to the list
linkedList.append(30); // Add 30 to the list
linkedList.prepend(5); // Add 5 at the beginning
linkedList.insertAt(15, 2); // Insert 15 at position 2

// Display the linked list
console.log("Initial List:");
linkedList.display(); // Output: 5 -> 10 -> 15 -> 20 -> 30 -> None

// Search for a value
linkedList.search(20); // Output: Value 20 found at position 3
linkedList.search(100); // Output: Value 100 not found in the list.

// Delete operations
console.log("\nAfter Deleting First Node:");
linkedList.deleteFirst(); // Remove the first element
linkedList.display(); // Output: 10 -> 15 -> 20 -> 30 -> None

console.log("\nAfter Deleting Last Node:");
linkedList.deleteLast(); // Remove the last element
linkedList.display(); // Output: 10 -> 15 -> 20 -> None

console.log("\nAfter Deleting Node at Position 1:");
linkedList.deleteAt(1); // Delete the node at position 1
linkedList.display(); // Output: 10 -> 20 -> None
