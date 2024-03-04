import { classify } from '@ember/string';

import { describe } from 'vitest';

import createTestFunction from '../create-test-function';

describe('classify', () => {
  const assert = createTestFunction(classify);

  assert('my favorite items', 'MyFavoriteItems', 'classify normal string');
  assert('css-class-name', 'CssClassName', 'classify dasherized string');
  assert('action_name', 'ActionName', 'classify underscored string');
  assert(
    'privateDocs/ownerInvoice',
    'PrivateDocs/OwnerInvoice',
    'classify namespaced camelized string'
  );
  assert(
    'private_docs/owner_invoice',
    'PrivateDocs/OwnerInvoice',
    'classify namespaced underscored string'
  );
  assert(
    'private-docs/owner-invoice',
    'PrivateDocs/OwnerInvoice',
    'classify namespaced dasherized string'
  );
  assert('-view-registry', '_ViewRegistry', 'classify prefixed dasherized string');
  assert(
    'components/-text-field',
    'Components/_TextField',
    'classify namespaced prefixed dasherized string'
  );
  assert('_Foo_Bar', '_FooBar', 'classify underscore-prefixed underscored string');
  assert('_Foo-Bar', '_FooBar', 'classify underscore-prefixed dasherized string');
  assert(
    '_foo/_bar',
    '_Foo/_Bar',
    'classify underscore-prefixed-namespaced underscore-prefixed string'
  );
  assert('-foo/_bar', '_Foo/_Bar', 'classify dash-prefixed-namespaced underscore-prefixed string');
  assert('-foo/-bar', '_Foo/_Bar', 'classify dash-prefixed-namespaced dash-prefixed string');
  assert('InnerHTML', 'InnerHTML', 'does nothing with classified string');
  assert('_FooBar', '_FooBar', 'does nothing with classified prefixed string');
});
