import { module, test } from 'qunit';
import { capitalize } from '@ember/string';

module('capitalize');

test('capitalize normal string', function(assert) {
  assert.deepEqual(capitalize('my favorite items'), 'My favorite items');
});

test('capitalize dasherized string', function(assert) {
  assert.deepEqual(capitalize('css-class-name'), 'Css-class-name');
});

test('capitalize underscored string', function(assert) {
  assert.deepEqual(capitalize('action_name'), 'Action_name');
});

test('capitalize camelcased string', function(assert) {
  assert.deepEqual(capitalize('innerHTML'), 'InnerHTML');
});

test('does nothing with capitalized string', function(assert) {
  assert.deepEqual(capitalize('Capitalized string'), 'Capitalized string');
});

test('capitalize namespaced camelized string', function(assert) {
  assert.deepEqual(capitalize('privateDocs/ownerInvoice'), 'PrivateDocs/OwnerInvoice');
});

test('capitalize namespaced underscored string', function(assert) {
  assert.deepEqual(capitalize('private_docs/owner_invoice'), 'Private_docs/Owner_invoice');
});

test('capitalize namespaced dasherized string', function(assert) {
  assert.deepEqual(capitalize('private-docs/owner-invoice'), 'Private-docs/Owner-invoice');
});

test('capitalize string with accent character', function(assert) {
  assert.deepEqual(capitalize('šabc'), 'Šabc');
});
