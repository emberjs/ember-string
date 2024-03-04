import { w } from '@ember/string';

import { describe } from 'vitest';

import createTestFunction from '../create-test-function';

describe('w', () => {
  const assert = createTestFunction(w);

  assert(
    'one two three',
    ['one', 'two', 'three'],
    `w('one two three') => ['one','two','three']`,
  );
  assert(
    'one   two  three',
    ['one', 'two', 'three'],
    `w('one    two    three') with extra spaces between words => ['one','two','three']`,
  );
  assert(
    'one\ttwo  three',
    ['one', 'two', 'three'],
    `w('one two three') with tabs`,
  );
});
