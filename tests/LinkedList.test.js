import LinkedList from '../src/LinkedList';

test('A new list should have no head', () => {
	const list = new LinkedList();
	expect(list.head).toBe(null);
});

test('Add value to empty list should add to head and correct value', () => {
	const list = new LinkedList();
	list.append(5);
	expect(list.head.value).toBe(5);
});

test('Adding value to list should add to end and correct value', () => {
	const list = new LinkedList();
	list.append(5);
	list.append(6);
	list.append(7);
	expect(list.head.nextNode.value).toBe(7);
});
