1. Stack: put in at the top of the stack, removed from the top of the stack.       (LIFO)
   Queue: put in at the front of the queue, removed from the back of the queue (FIFO)
2. Linked List: O(1); Hash Table: 0(1); Binary Search Tree O(logn)
3. The biggest advantage of hash tables over arrays is to be able to find something with a key at O(1); arrays can access at O(1) time, but only if you know the index; otherwise, it's O(n) time to find something. Consequentally, inserting and deleting are also generally quicker with hash tables over arrays.