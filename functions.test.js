const functions = require('./functions');

test('Adds 2 + 2 equal to 4', () => {
	expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to not equal to 5', () => {
	expect(functions.add(2,2)).not.toBe(5);
});

test('should be null', () => {
	expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
	expect(functions.checkValue(5)).toBe(5);
});

test('Should be falsy', () => {
	expect(functions.checkValue(false)).toBeFalsy();
});

test('User should be Kiran VM object', () => {
	expect(functions.createUser()).toStrictEqual({
		firstName:'Kiran',
		lastName:'VM'
	});
});