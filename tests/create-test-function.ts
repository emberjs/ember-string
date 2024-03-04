import { expect, it } from 'vitest';

export default function createTestFunction<Given = unknown, Return = unknown>(
  fn: (given: Given) => Return
) {
  return function (given: Given, expected: Return, description: string) {
    it(description, () => {
      expect(fn(given)).to.deep.equal(expected);
    });
  };
}
