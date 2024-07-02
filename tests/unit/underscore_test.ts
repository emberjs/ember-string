import { underscore } from '@ember/string';

import { describe } from 'vitest';

import createTestFunction from '../create-test-function';

describe('underscore', () => {
  const assert = createTestFunction(underscore);

  assert('my favorite items', 'my_favorite_items', 'with normal string');
  assert('css-class-name', 'css_class_name', 'with dasherized string');
  assert('action_name', 'action_name', 'does nothing with underscored string');
  assert('innerHTML', 'inner_html', 'with camelcased string');
  assert(
    'PrivateDocs/OwnerInvoice',
    'private_docs/owner_invoice',
    'underscore namespaced classified string',
  );
  assert(
    'privateDocs/ownerInvoice',
    'private_docs/owner_invoice',
    'underscore namespaced camelized string',
  );
  assert(
    'private-docs/owner-invoice',
    'private_docs/owner_invoice',
    'underscore namespaced dasherized string',
  );
});
