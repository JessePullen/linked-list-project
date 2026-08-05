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
	pop() {
		if (this.headNode === null) {
			return undefined;
		}
		// Stores current value before reassinging head node
		let currentValue = this.headNode.value;
		this.headNode = this.headNode.nextNode;
		return currentValue;
	}
	contains(value) {
		let current = this.headNode;
		while (current !== null) {
			if (current.value === value) {
				return true;
			}
			current = current.nextNode;
		}
		return false;
	}
	// findIndex(value) Finds the first index of a given value or return -1
	findIndex(value) {
		let count = 0;
		let current = this.headNode;
		while (current !== null) {
			if (current.value === value) {
				return count;
			}
			count++;
			current = current.nextNode;
		}
		return -1;
	}
	// toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.
	toString() {
		if (this.headNode === null) {
			return '';
		}
		let string = '';
		let current = this.headNode;
		while (current !== null) {
			string += `( ${current.value} ) -> `;
			current = current.nextNode;
		}
		string += 'null';
		return string;
	}
}
