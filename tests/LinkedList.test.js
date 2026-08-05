import LinkedList from '../src/LinkedList';

test('A new list should have no head', () => {
	const list = new LinkedList();
	expect(list.head).toBe(null);
});

test('Append adds a value to empty list and should add to head with correct value', () => {
	const list = new LinkedList();
	list.append(5);
	expect(list.head.value).toBe(5);
});

test('Append adds a value to list and should add to end with correct value', () => {
	const list = new LinkedList();
	list.append(5);
	list.append(6);
	list.append(7);
	expect(list.head.nextNode.nextNode.value).toBe(7);
});

test('Prepend adds value to start of list and should shift other values down', () => {
	const list = new LinkedList();
	list.append(5);
	list.append(6);
	list.prepend(0);
	expect(list.head.value).toBe(0);
});
