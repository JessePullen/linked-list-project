import LinkedList from '../src/LinkedList';

test('A new list should have no head', () => {
	const list = new LinkedList();

	expect(list.headNode).toBeNull();
});

test('Append adds a value to empty list and should add to head with correct value', () => {
	const list = new LinkedList();

	list.append(5);

	expect(list.headNode.value).toBe(5);
});

test('Append adds a value to list and should add to end with correct value', () => {
	const list = new LinkedList();

	list.append(5);
	list.append(6);
	list.append(7);

	expect(list.headNode.nextNode.nextNode.value).toBe(7);
});

test('Prepend adds value to start of list and should shift other values down', () => {
	const list = new LinkedList();

	list.append(5);
	list.append(6);
	list.prepend(0);

	expect(list.headNode.value).toBe(0);
});

test('Size returns number of nodes', () => {
	const list = new LinkedList();

	list.append(1);
	list.append(2);
	list.append(3);

	expect(list.size()).toBe(3);
});

test('Head returns value of head node or undefined', () => {
	const list = new LinkedList();

	expect(list.head()).toBeUndefined();

	list.append(1);
	list.append(2);

	expect(list.head()).toBe(1);
});

test('Tail returns value of last node or undefined', () => {
	const list = new LinkedList();

	expect(list.tail()).toBeUndefined();

	list.append(1);
	list.append(2);

	expect(list.tail()).toBe(2);
});

test('Return value at given index or return undefined', () => {
	const list = new LinkedList();

	expect(list.at(0)).toBeUndefined();

	list.append(1);
	list.append(2);

	expect(list.at(1)).toBe(2);
});

test('Pop removes the head and returns its value or return undefined', () => {
	const list = new LinkedList();

	expect(list.pop()).toBeUndefined();

	list.append(1);
	list.append(2);

	expect(list.pop()).toBe(1);
	expect(list.head()).toBe(2);
});

test('Check if it contains a value returning true or false if not', () => {
	const list = new LinkedList();

	expect(list.contains('test')).toBeFalsy();

	list.append(5);
	list.append('test');

	expect(list.contains('test')).toBeTruthy();
});

test('Finds the first index of a given value or return -1', () => {
	const list = new LinkedList();

	expect(list.findIndex('test')).toBe(-1);

	list.append(5);
	list.append('test');

	expect(list.findIndex('test')).toBe(1);
});

test('Converts value to string for ease of printing. Return empty string on empty list', () => {
	const list = new LinkedList();

	expect(list.toString()).toBe('');

	list.append(1);
	list.append(2);

	expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> null');
});
