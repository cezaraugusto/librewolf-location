import { expect, test, describe } from 'vitest';
import librewolfLocation from '../src/index';

describe('librewolf-location module', () => {
  test('returns string or null', () => {
    const res = librewolfLocation();
    expect(typeof res === 'string' || res === null).toBe(true);
  });
});
