import { describe, expect, test } from '@jest/globals';
import { classNames } from './classNames';

describe('test', () => {
  test('standart case', () => {
    const result = 'class1 class2';
    expect(classNames('class1', {}, ['class2'])).toBe(result);
  });

  test('have mode case', () => {
    const result = 'class1 class2 hovered selected';
    expect(classNames('class1', { hovered: true, selected: true }, ['class2']))
      .toBe(result);
  });

  test('mode have false case', () => {
    const result = 'class1 class2 hovered';
    expect(classNames('class1', { hovered: true, selected: false }, ['class2'])).toBe(result);
  });

  test('have undefined mode case', () => {
    const result = 'class1 class2 hovered';
    expect(classNames('class1', { hovered: true, selected: undefined }, ['class2'])).toBe(result);
  });
});
