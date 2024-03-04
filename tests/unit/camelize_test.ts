import { camelize } from '@ember/string';

import { describe } from 'vitest';

import createTestFunction from '../create-test-function';

describe('camelize', () => {
  const assert = createTestFunction(camelize);

  assert('my favorite items', 'myFavoriteItems', 'camelize normal string');
  assert('I Love Ramen', 'iLoveRamen', 'camelize capitalized string');
  assert('css-class-name', 'cssClassName', 'camelize dasherized string');
  assert('action_name', 'actionName', 'camelize underscored string');
  assert('action.name', 'actionName', 'camelize dot notation string');
  assert('innerHTML', 'innerHTML', 'does nothing with camelcased string');
  assert(
    'PrivateDocs/OwnerInvoice',
    'privateDocs/ownerInvoice',
    'camelize namespaced classified string',
  );
  assert(
    'private_docs/owner_invoice',
    'privateDocs/ownerInvoice',
    'camelize namespaced underscored string',
  );
  assert(
    'private-docs/owner-invoice',
    'privateDocs/ownerInvoice',
    'camelize namespaced dasherized string',
  );
});
