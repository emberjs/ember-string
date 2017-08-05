import { module } from 'qunit';
import { capitalize } from '@ember/string';
import createTestFunction from '../helpers/create-test-function';

module('capitalize');

const test = createTestFunction(capitalize);

test('my favorite items',          'My favorite items',          'capitalize normal string');
test('css-class-name',             'Css-class-name',             'capitalize dasherized string');
test('action_name',                'Action_name',                'capitalize underscored string');
test('innerHTML',                  'InnerHTML',                  'capitalize camelcased string');
test('Capitalized string',         'Capitalized string',         'does nothing with capitalized string');
test('privateDocs/ownerInvoice',   'PrivateDocs/OwnerInvoice',   'capitalize namespaced camelized string');
test('private_docs/owner_invoice', 'Private_docs/Owner_invoice', 'capitalize namespaced underscored string');
test('private-docs/owner-invoice', 'Private-docs/Owner-invoice', 'capitalize namespaced dasherized string');
test('šabc',                       'Šabc',                       'capitalize string with accent character');
