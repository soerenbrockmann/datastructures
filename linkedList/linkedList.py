class Node:
    def __init__(self, data):
        self.data = data  # The data the node stores
        self.next = None  # The pointer to the next node, initially None

class LinkedList:
    def __init__(self):
        self.head = None  # Initially, the list is empty, so head is None

    # Method to insert a new node at the end of the list
    def append(self, data):
        new_node = Node(data)  # Create a new node
        if not self.head:  # If the list is empty, make the new node the head
            self.head = new_node
            return

        last_node = self.head
        while last_node.next:  # Traverse to the last node
            last_node = last_node.next
        last_node.next = new_node  # Make the last node point to the new node

    # Method to insert a new node at the beginning of the list
    def prepend(self, data):
        new_node = Node(data)  # Create a new node
        new_node.next = self.head  # Make the new node point to the current head
        self.head = new_node  # Update the head to the new node

    # Method to insert a new node at a specific position
    def insert_at(self, data, position):
        if position == 0:  # If inserting at the start
            self.prepend(data)
            return

        new_node = Node(data)
        current = self.head
        count = 0

        # Traverse to the position where the node should be inserted
        while current and count < position - 1:
            current = current.next
            count += 1

        if not current:
            print("Position out of bounds")
            return

        new_node.next = current.next  # Link the new node to the next node
        current.next = new_node  # Link the current node to the new node

    # Method to delete a node at the beginning of the list
    def delete_first(self):
        if not self.head:
            return  # If the list is empty, nothing to delete
        self.head = self.head.next  # Make the head point to the next node

    # Method to delete a node at the end of the list
    def delete_last(self):
        if not self.head:
            return  # If the list is empty, nothing to delete

        if not self.head.next:  # If there is only one node
            self.head = None
            return

        current = self.head
        while current.next and current.next.next:  # Traverse to the second-to-last node
            current = current.next
        current.next = None  # Remove the last node

    # Method to delete a node at a specific position
    def delete_at(self, position):
        if not self.head:
            return  # If the list is empty, nothing to delete
        if position == 0:  # If deleting the first node
            self.delete_first()
            return

        current = self.head
        count = 0

        # Traverse to the node before the one to be deleted
        while current and count < position - 1:
            current = current.next
            count += 1

        if not current or not current.next:
            print("Position out of bounds")
            return

        current.next = current.next.next  # Remove the node at the specified position

    # Method to display all elements of the linked list
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    # Method to search for a value in the linked list
    def search(self, value):
        current = self.head
        index = 0

        while current:
            if current.data == value:
                print(f"Value {value} found at position {index}")
                return
            current = current.next
            index += 1

        print(f"Value {value} not found in the list.")


# Create a LinkedList instance
linked_list = LinkedList()

# Perform basic operations
linked_list.append(10)   # Add 10 to the list
linked_list.append(20)   # Add 20 to the list
linked_list.append(30)   # Add 30 to the list
linked_list.prepend(5)   # Add 5 at the beginning
linked_list.insert_at(15, 2) # Insert 15 at position 2

# Display the linked list
print("Initial List:")
linked_list.display()  # Output: 5 -> 10 -> 15 -> 20 -> 30 -> None

# Search for a value
linked_list.search(20)  # Output: Value 20 found at position 3
linked_list.search(100) # Output: Value 100 not found in the list.

# Delete operations
print("\nAfter Deleting First Node:")
linked_list.delete_first()  # Remove the first element
linked_list.display()  # Output: 10 -> 15 -> 20 -> 30 -> None

print("\nAfter Deleting Last Node:")
linked_list.delete_last()   # Remove the last element
linked_list.display()  # Output: 10 -> 15 -> 20 -> None

print("\nAfter Deleting Node at Position 1:")
linked_list.delete_at(1)    # Delete the node at position 1
linked_list.display()  # Output: 10 -> 20 -> None
