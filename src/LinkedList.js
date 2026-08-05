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
				if (current.nextNode === null) {
					current.nextNode = node;
					break;
				}
				current = current.nextNode;
			}
		}
	}
}
