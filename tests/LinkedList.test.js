import LinkedList from '../src/LinkedList';

test('A new list should have no head', () => {
	const list = new LinkedList();
	expect(list.headNode).toBe(null);
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
	expect(list.head()).toBe(undefined);

	list.append(1);
	list.append(2);

	expect(list.head()).toBe(1);
});

test('Tail returns value of last node or undefined', () => {
	const list = new LinkedList();
	expect(list.tail()).toBe(undefined);

	list.append(1);
	list.append(2);

	expect(list.tail()).toBe(2);
});
