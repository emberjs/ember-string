import { dasherize } from '@ember/string';

import { describe } from 'vitest';

import createTestFunction from '../create-test-function';

describe('dasherize', () => {
  const assert = createTestFunction(dasherize);

  assert('my favorite items', 'my-favorite-items', 'dasherize normal string');
  assert('css-class-name', 'css-class-name', 'does nothing with dasherized string');
  assert('action_name', 'action-name', 'dasherize underscored string');
  assert('innerHTML', 'inner-html', 'dasherize camelcased string');
  assert('toString', 'to-string', 'dasherize string that is the property name of Object.prototype');
  assert(
    'PrivateDocs/OwnerInvoice',
    'private-docs/owner-invoice',
    'dasherize namespaced classified string'
  );
  assert(
    'privateDocs/ownerInvoice',
    'private-docs/owner-invoice',
    'dasherize namespaced camelized string'
  );
  assert(
    'private_docs/owner_invoice',
    'private-docs/owner-invoice',
    'dasherize namespaced underscored string'
  );
});
