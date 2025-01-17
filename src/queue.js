const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {  
  node = null;

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    let element = new ListNode(value);

    if (!this.node) {
      this.node = element;
    } else {
      let last = this.node;

      while (last.next) {
        last = last.next;
      }
      last.next = element;
    }

  }

  dequeue() {
    let value = this.node.value;

    this.node = this.node.next;

    return value;
  }
}

module.exports = {
  Queue
};
