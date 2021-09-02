import { module } from 'qunit';
import { camelize } from '@ember/string';
import createTestFunction from '../helpers/create-test-function';

module('camelize');

const test = createTestFunction(camelize);

test('my favorite items', 'myFavoriteItems', 'camelize normal string');
test('I Love Ramen', 'iLoveRamen', 'camelize capitalized string');
test('css-class-name', 'cssClassName', 'camelize dasherized string');
test('action_name', 'actionName', 'camelize underscored string');
test('action.name', 'actionName', 'camelize dot notation string');
test('innerHTML', 'innerHTML', 'does nothing with camelcased string');
test(
  'PrivateDocs/OwnerInvoice',
  'privateDocs/ownerInvoice',
  'camelize namespaced classified string'
);
test(
  'private_docs/owner_invoice',
  'privateDocs/ownerInvoice',
  'camelize namespaced underscored string'
);
test(
  'private-docs/owner-invoice',
  'privateDocs/ownerInvoice',
  'camelize namespaced dasherized string'
);
