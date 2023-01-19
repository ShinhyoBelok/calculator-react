import calculate from '../calculate';

describe('Calculate test', () => {
  test('click on a key of the calculator', () => {
    expect(calculate({ total: null, next: null, operation: null }, '5')).toStrictEqual({ total: null, next: '5' });
  });

  test('Test of an operation', () => {
    expect(calculate({ total: '15', next: '2', operation: 'x' }, '=')).toStrictEqual({ total: '30', next: null, operation: null });
  });

  test('Test decimals', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '.')).toStrictEqual({ total: null, next: '5.', operation: null });
    expect(calculate({ total: '1', next: null, operation: '÷' }, '.')).toStrictEqual({ total: '1', next: '0.', operation: '÷' });
  });

  test('Test change sign', () => {
    expect(calculate({ total: null, next: '9', operation: null }, '+/-')).toStrictEqual({ total: null, next: '-9', operation: null });
    expect(calculate({ total: '9', next: null, operation: null }, '+/-')).toStrictEqual({ total: '-9', next: null, operation: null });
  });

  test('Test if there is an operation, update next', () => {
    expect(calculate({ total: null, next: '5', operation: '+' }, '7')).toStrictEqual({ total: null, next: '57', operation: '+' });
    expect(calculate({ total: null, next: '0', operation: '+' }, '7')).toStrictEqual({ total: null, next: '7', operation: '+' });
  });

  test('Test AC', () => {
    expect(calculate({ total: '45', next: '5', operation: '+' }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('Test user pressed an operation after pressing =', () => {
    expect(calculate({ total: '45', next: null, operation: '-' }, '=')).toStrictEqual({});
  });

  test('Test user pressed an operation button and there is an existing operation', () => {
    expect(calculate({ total: '45', next: null, operation: '+' }, 'x')).toStrictEqual({ total: '45', next: null, operation: 'x' });
    expect(calculate({ total: '45', next: '36', operation: '+' }, 'x')).toStrictEqual({ total: '81', next: null, operation: 'x' });
    expect(calculate({ total: null, next: null, operation: '+' }, 'x')).toStrictEqual({ total: 0, operation: 'x' });
  });

  test("Test the user hasn't typed a number yet, just save the operation", () => {
    expect(calculate({ total: null, next: null, operation: null }, 'x')).toStrictEqual({ operation: 'x' });
  });

  test("Test save the operation and shift 'next' into 'total'", () => {
    expect(calculate({ total: null, next: '152.3', operation: null }, '+')).toStrictEqual({ total: '152.3', next: null, operation: '+' });
  });
});
