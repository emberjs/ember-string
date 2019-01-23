import {
  module,
  test as qunitTest
} from 'qunit';
import {
  loc,
  getStrings,
  setStrings
} from '@ember/string';

let oldStrings;

module('loc', {
  beforeEach() {
    oldStrings = getStrings();
    setStrings({
      '_Hello World': 'Bonjour le monde',
      '_Hello %@': 'Bonjour %@',
      '_Hello %@ %@': 'Bonjour %@ %@',
      '_Hello %@# %@#': 'Bonjour %@2 %@1'
    });
  },

  afterEach() {
    setStrings(oldStrings);
  }
});

function test(given, args, expected, description) {
  qunitTest(description, function(assert) {
    assert.equal(loc(given, args), expected);

    assert.expectDeprecation();
  });
}

test('_Hello World', [], 'Bonjour le monde', `loc('_Hello World') => 'Bonjour le monde'`);
test('_Hello %@ %@', ['John', 'Doe'], 'Bonjour John Doe', `loc('_Hello %@ %@', ['John', 'Doe']) => 'Bonjour John Doe'`);
test('_Hello %@# %@#', ['John', 'Doe'], 'Bonjour Doe John', `loc('_Hello %@# %@#', ['John', 'Doe']) => 'Bonjour Doe John'`);
test('_Not In Strings', [], '_Not In Strings', `loc('_Not In Strings') => '_Not In Strings'`);

qunitTest('works with argument form', function(assert) {
  assert.equal(loc('_Hello %@', 'John'), 'Bonjour John');
  assert.equal(loc('_Hello %@ %@', ['John'], 'Doe'), 'Bonjour John Doe');

  assert.expectDeprecation();
});
