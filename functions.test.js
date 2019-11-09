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


test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

//arrays
test('Admin should be in usernames', () => {
	usernames = ['john','karen','admin'];
	expect(usernames).toContain('admin');
});

//working with async data
test('User fetched name should be Leanne Graham',() => {
	expect.assertions(1);
	return functions.fetchUser()
		.then(data => {
			expect(data.name).toEqual('Leanne Graham');
		});
});

//Async Await
test('User fetched name should be Leanne Graham using Async Wait',async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});
