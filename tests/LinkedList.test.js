import LinkedList from '../src/LinkedList';

const list = new LinkedList();

test('A new list should have no head', () => {
	expect(list.head).toBe(null);
});
