import Ember from 'ember'; // ES6TODO Ember.STRINGS
import { module, test } from 'qunit';
import { loc } from '@ember/string';

let oldString;

module('loc', {
  setup() {
    oldString = Ember.STRINGS;
    Ember.STRINGS = {
      '_Hello World': 'Bonjour le monde',
      '_Hello %@': 'Bonjour %@',
      '_Hello %@ %@': 'Bonjour %@ %@',
      '_Hello %@# %@#': 'Bonjour %@2 %@1'
    };
  },

  teardown() {
    Ember.STRINGS = oldString;
  }
});

test('\'_Hello World\'.loc() => \'Bonjour le monde\'', function(assert) {
  assert.equal(loc('_Hello World'), 'Bonjour le monde');
});

test('\'_Hello %@ %@\'.loc(\'John\', \'Doe\') => \'Bonjour John Doe\'', function(assert) {
  assert.equal(loc('_Hello %@ %@', ['John', 'Doe']), 'Bonjour John Doe');
});

test('\'_Hello %@# %@#\'.loc(\'John\', \'Doe\') => \'Bonjour Doe John\'', function(assert) {
  assert.equal(loc('_Hello %@# %@#', ['John', 'Doe']), 'Bonjour Doe John');
});

test('\'_Not In Strings\'.loc() => \'_Not In Strings\'', function(assert) {
  assert.equal(loc('_Not In Strings'), '_Not In Strings');
});

test('works with argument form', function(assert) {
  assert.equal(loc('_Hello %@', 'John'), 'Bonjour John');
  assert.equal(loc('_Hello %@ %@', ['John'], 'Doe'), 'Bonjour [John] Doe');
});
