import { capitalize } from '@ember/string';

import { describe } from 'vitest';

import createTestFunction from '../create-test-function';

describe('capitalize', () => {
  const assert = createTestFunction(capitalize);

  assert('my favorite items', 'My favorite items', 'capitalize normal string');
  assert('css-class-name', 'Css-class-name', 'capitalize dasherized string');
  assert('action_name', 'Action_name', 'capitalize underscored string');
  assert('innerHTML', 'InnerHTML', 'capitalize camelcased string');
  assert('Capitalized string', 'Capitalized string', 'does nothing with capitalized string');
  assert(
    'privateDocs/ownerInvoice',
    'PrivateDocs/OwnerInvoice',
    'capitalize namespaced camelized string'
  );
  assert(
    'private_docs/owner_invoice',
    'Private_docs/Owner_invoice',
    'capitalize namespaced underscored string'
  );
  assert(
    'private-docs/owner-invoice',
    'Private-docs/Owner-invoice',
    'capitalize namespaced dasherized string'
  );
  assert('šabc', 'Šabc', 'capitalize string with accent character');
});
