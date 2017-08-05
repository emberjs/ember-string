import { module, test } from 'qunit';
import { camelize } from '@ember/string';

module('camelize');

test('camelize normal string', function(assert) {
  assert.deepEqual(camelize('my favorite items'), 'myFavoriteItems');
});

test('camelize capitalized string', function(assert) {
  assert.deepEqual(camelize('I Love Ramen'), 'iLoveRamen');
});

test('camelize dasherized string', function(assert) {
  assert.deepEqual(camelize('css-class-name'), 'cssClassName');
});

test('camelize underscored string', function(assert) {
  assert.deepEqual(camelize('action_name'), 'actionName');
});

test('camelize dot notation string', function(assert) {
  assert.deepEqual(camelize('action.name'), 'actionName');
});

test('does nothing with camelcased string', function(assert) {
  assert.deepEqual(camelize('innerHTML'), 'innerHTML');
});

test('camelize namespaced classified string', function(assert) {
  assert.deepEqual(camelize('PrivateDocs/OwnerInvoice'), 'privateDocs/ownerInvoice');
});

test('camelize namespaced underscored string', function(assert) {
  assert.deepEqual(camelize('private_docs/owner_invoice'), 'privateDocs/ownerInvoice');
});

test('camelize namespaced dasherized string', function(assert) {
  assert.deepEqual(camelize('private-docs/owner-invoice'), 'privateDocs/ownerInvoice');
});
