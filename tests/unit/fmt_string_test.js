import { module, test as qunitTest } from 'qunit';
import { fmt } from 'at-ember-string';

module('fmt');
function test(given, args, expected, description) {
  qunitTest(description, function(assert) {
    assert.equal(fmt(given, args), expected);
  });
}

test('Hello %@ %@',   ['John', 'Doe'],  'Hello John Doe', `fmt('Hello %@ %@', ['John', 'Doe']) => 'Hello John Doe'`);
test('Hello %@2 %@1', ['John', 'Doe'],  'Hello Doe John', `fmt('Hello %@2 %@1', ['John', 'Doe']) => 'Hello Doe John'`);
test(
  '%@08 %@07 %@06 %@05 %@04 %@03 %@02 %@01',
  ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'],
 'Eight Seven Six Five Four Three Two One',
  `fmt('%@08 %@07 %@06 %@05 %@04 %@03 %@02 %@01', ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']) => 'Eight Seven Six Five Four Three Two One'`
);
test('data: %@', [{ id: 3 }],  'data: {id: 3}', `fmt('data: %@', [{ id: 3 }]) => 'data: {id: 3}'`);
test('%@', 'John', 'John', 'works with argument form');
