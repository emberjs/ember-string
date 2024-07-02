import { decamelize } from '@ember/string';

import { describe } from 'vitest';

import createTestFunction from '../create-test-function';

describe('decamelize', () => {
  const assert = createTestFunction(decamelize);

  assert(
    'my favorite items',
    'my favorite items',
    'does nothing with normal string',
  );
  assert(
    'css-class-name',
    'css-class-name',
    'does nothing with dasherized string',
  );
  assert('action_name', 'action_name', 'does nothing with underscored string');
  assert(
    'innerHTML',
    'inner_html',
    'converts a camelized string into all lower case separated by underscores.',
  );
  assert('size160Url', 'size160_url', 'decamelizes strings with numbers');
  assert(
    'PrivateDocs/OwnerInvoice',
    'private_docs/owner_invoice',
    'decamelize namespaced classified string',
  );
  assert(
    'privateDocs/ownerInvoice',
    'private_docs/owner_invoice',
    'decamelize namespaced camelized string',
  );
});
