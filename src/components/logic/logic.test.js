import calculate from './calculator';
import operate from './operate';

describe('Testing functional components', () => {
  test('Testing calculate function for +', () => {
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

  test('Testing operate function for -', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });

  test('Testing operate function for ÷', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  test('Testing operate function for x', () => {
    expect(operate(10, 5, 'x')).toBe('50');
  });

  test('Testing operate function for %', () => {
    expect(operate(10, 5, '%')).toBe('0');
  });
});
