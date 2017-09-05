import { module } from 'qunit';
import { underscore } from 'at-ember-string';
import createTestFunction from '../helpers/create-test-function';

module('underscore');

const test = createTestFunction(underscore);

test('my favorite items',          'my_favorite_items',          'with normal string');
test('css-class-name',             'css_class_name',             'with dasherized string');
test('action_name',                'action_name',                'does nothing with underscored string');
test('innerHTML',                  'inner_html',                 'with camelcased string');
test('PrivateDocs/OwnerInvoice',   'private_docs/owner_invoice', 'underscore namespaced classified string');
test('privateDocs/ownerInvoice',   'private_docs/owner_invoice', 'underscore namespaced camelized string');
test('private-docs/owner-invoice', 'private_docs/owner_invoice', 'underscore namespaced dasherized string');
