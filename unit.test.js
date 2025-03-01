function mathematize(num1, num2) {
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	if (isNaN(num1) || isNaN(num2)) throw new Error('Cannot sum these nums');
	return {
		addition: num1 + num2,
		subtraction: num1 - num2,
		division: num1 % num2 === 0,
	};
}

describe('mathematize function', () => {
	// Test case 1
	test('returns an object with addition, subtraction, and division', () => {
		const result = mathematize(1, 2);
		expect(result).toHaveProperty('addition');
		expect(result).toHaveProperty('subtraction');
		expect(result).toHaveProperty('division');
	});
	// Test case 2
	test('correctly calculates addition, subtraction, and division', () => {
		const result = mathematize(10, 3);
		expect(result.addition).toBe(13);
		expect(result.subtraction).toBe(7);
		expect(result.divisible).toBe(false);

		expect(result).toEqual({ addition: 13, subtraction: 7, division: false });

		result = mathematize(6, -2);
		expect(result.addition).toBe(4);
		expect(result.subtraction).toBe(8);
		expect(result.divisible).toBe(true);
	});

	// Test case 3
	test('throws error for non-integer input', () => {
		const message = 'Cannot sum these numbers';
		expect(() => mathematize('abc', 5)).toThrowError(message);
		expect(() => mathematize(10, 'xyz')).toThrowError(message);
		expect(() => mathematize('yes', 'no')).toThrowError(message);
		expect(() => mathematize(10, NaN)).toThrowError(message);
		expect(() => mathematize(15, undefined)).toThrowError(message);
		expect(() => mathematize(null, 7)).toThrowError(message);
	});
	// Test case 4
	test('', () => {
		const result = mathematize(20, 0);
		expect(result.addition).toBe(20);
		expect(result.subtraction).toBe(20);
		expect(result.divisible).toBe(false);
	});
});
