import Node from './Node.js';

export default class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	append(value) {
		let node = new Node(value);

		// If list empty, add node
		if (this.head === null) {
			this.head = node;
		} else {
			let current = this.head;

			// Traverse list
			while (current !== null) {
				// End of list - append new node
				if (current.nextNode === null) {
					current.nextNode = node;
					break;
				}
				current = current.nextNode;
			}
		}
	}
	prepend(value) {
		let node = new Node(value);
		if (this.head === null) {
			this.head = node;
		} else {
			// New node points to old head
			node.nextNode = this.head;
			// Head points to new node
			this.head = node;
		}
	}
	size() {
		let count = 0;
		let current = this.head;
		while (current !== null) {
			count++;
			current = current.nextNode;
		}
		return count;
	}
}
