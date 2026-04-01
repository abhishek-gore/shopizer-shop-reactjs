import {
  isValidValue,
  isCheckValueAndSetParams,
  hasProperty,
  isValidObject,
  getValueFromObject
} from './helper';

describe('helper utilities', () => {
  test('isValidValue returns false for undefined, null, empty string', () => {
    expect(isValidValue(undefined)).toBe(false);
    expect(isValidValue(null)).toBe(false);
    expect(isValidValue('')).toBe(false);
    expect(isValidValue('test')).toBe(true);
  });

  test('isCheckValueAndSetParams returns empty string for invalid values', () => {
    expect(isCheckValueAndSetParams('param=', null)).toBe('');
    expect(isCheckValueAndSetParams('param=', 'value')).toBe('param=value');
  });

  test('hasProperty checks object properties correctly', () => {
    expect(hasProperty({ key: 'value' }, 'key')).toBe(true);
    expect(hasProperty({ key: 'value' }, 'missing')).toBe(false);
    expect(hasProperty([], 'key')).toBe(false);
  });

  test('isValidObject checks if object has keys', () => {
    expect(isValidObject({})).toBe(false);
    expect(isValidObject({ key: 'value' })).toBe(true);
  });

  test('getValueFromObject returns value or empty string', () => {
    expect(getValueFromObject({ key: 'value' }, 'key')).toBe('value');
    expect(getValueFromObject({ key: '' }, 'key')).toBe('');
    expect(getValueFromObject({}, 'key')).toBe('');
  });
});
