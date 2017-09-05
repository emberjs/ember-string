import { module } from 'qunit';
import { w } from 'at-ember-string';
import createTestFunction from '../helpers/create-test-function';

module('w');

const test = createTestFunction(w);

test('one two three',    ['one', 'two', 'three'], `w('one two three') => ['one','two','three']`);
test('one   two  three', ['one', 'two', 'three'], `w('one    two    three') with extra spaces between words => ['one','two','three']`);
test('one\ttwo  three',  ['one', 'two', 'three'], `w('one two three') with tabs`);
