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
	insertAt(index, ...values) {
		if (index > this.size() || index < 0) {
			throw new RangeError('Index out of bounds');
		}

		let current = this.headNode;
		let nextNode = null;

		if (this.headNode !== null && index !== this.size()) {
			nextNode = current.nextNode;
		}

		// Sets head to new node first of values, then removes first value to not duplicate in insertion loop
		if (index === 0) {
			nextNode = current;
			let node = new Node(values[0]);
			this.headNode = node;
			current = node;
			values = values.slice(1);
		} else {
			// Finds index for insertion
			for (let i = 1; i < index; i++) {
				current = current.nextNode;
			}
		}

		for (const value of values) {
			let node = new Node(value);
			current.nextNode = node;
			current = node;
		}
		// Adds remainder of list to end of insertion
		current.nextNode = nextNode;
	}
}
