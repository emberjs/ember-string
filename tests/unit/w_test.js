import { module, test } from 'qunit';
import { w } from '@ember/string';

module('w');

test('\'one two three\'.w() => [\'one\',\'two\',\'three\']', function(assert) {
  assert.deepEqual(w('one two three'), ['one', 'two', 'three']);
});

test('\'one    two    three\'.w() with extra spaces between words => [\'one\',\'two\',\'three\']', function(assert) {
  assert.deepEqual(w('one   two  three'), ['one', 'two', 'three']);
});

test('\'one two three\'.w() with tabs', function(assert) {
  assert.deepEqual(w('one\ttwo  three'), ['one', 'two', 'three']);
});
