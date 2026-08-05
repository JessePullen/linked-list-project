import Node from './Node.js';

export default class LinkedList {
	constructor(headNode = null) {
		this.headNode = headNode;
	}
	append(value) {
		let node = new Node(value);

		// If list empty, add node
		if (this.headNode === null) {
			this.headNode = node;
		} else {
			let current = this.headNode;

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
		if (this.headNode === null) {
			this.headNode = node;
		} else {
			// New node points to old head
			node.nextNode = this.headNode;
			// Head points to new node
			this.headNode = node;
		}
	}
	size() {
		let count = 0;
		let current = this.headNode;
		while (current !== null) {
			count++;
			current = current.nextNode;
		}
		return count;
	}
	head() {
		if (this.headNode === null) {
			return undefined;
		}
		return this.headNode.value;
	}
	tail() {
		if (this.headNode === null) {
			return undefined;
		}
		let current = this.headNode;
		while (current !== null) {
			current = current.nextNode;
			if (current.nextNode === null) {
				return current.value;
			}
		}
	}
	at(index) {
		let count = 0;
		let current = this.headNode;
		// Count while traversing list to know where index is
		while (current !== null) {
			if (index === count) {
				return current.value;
			}
			current = current.nextNode;
			count++;
		}
		return undefined;
	}
}
