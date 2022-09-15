import calculate from './calculator';
import operate from './operate';

describe('Testing functional components', () => {
  test('Testing calculate function', () => {
    const state = {
      total: 0,
      next: 3,
      operation: null,
    };
    const data = {
      total: 3,
      next: null,
      operation: '+',
    };

    expect(calculate(state, '+')).toEqual(data);
  });
  test('Testing operate function', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });
});
