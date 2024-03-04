/* eslint-disable @typescript-eslint/ban-ts-comment */
import { module, test } from 'qunit';
import {
  camelize,
  capitalize,
  classify,
  dasherize,
  decamelize,
  // fmt,
  getStrings,
  setStrings,
  underscore,
  w,
} from '@ember/string';

// function testFmt() {
//   fmt('Hello %@ %@', ['John', 'Doe']); // "Hello John Doe"
//   fmt('Hello %@2, %@1', ['John', 'Doe']); // "Hello Doe, John"
//   fmt('Hello %@ %@', 'John', 'Doe'); // "Hello John Doe"
//   fmt('data: %@', [{ id: 3 }]);
//   fmt('%@', 'John');
// }
//

module('basic tests', function () {
  test('all functions defined', function (assert) {
    assert.ok(camelize);
    assert.ok(capitalize);
    assert.ok(classify);
    assert.ok(dasherize);
    assert.ok(decamelize);
    assert.ok(getStrings);
    assert.ok(setStrings);
    assert.ok(underscore);
    assert.ok(w);
  });

  test('w', function (assert) {
    assert.deepEqual(w('alpha beta gamma'), ['alpha', 'beta', 'gamma']);
  });

  test('decamelize', function (assert) {
    assert.expect(0);
    decamelize('innerHTML'); // 'inner_html'
    decamelize('action_name'); // 'action_name'
    decamelize('css-class-name'); // 'css-class-name'
    decamelize('my favorite items'); // 'my favorite items'
  });

  test('dasherize', function (assert) {
    assert.expect(0);
    dasherize('innerHTML'); // 'inner-html'
    dasherize('action_name'); // 'action-name'
    dasherize('css-class-name'); // 'css-class-name'
    dasherize('my favorite items'); // 'my-favorite-items'
    dasherize('privateDocs/ownerInvoice'); // 'private-docs/owner-invoice'
  });

  test('camelize', function (assert) {
    assert.expect(0);
    camelize('innerHTML'); // 'innerHTML'
    camelize('action_name'); // 'actionName'
    camelize('css-class-name'); // 'cssClassName'
    camelize('my favorite items'); // 'myFavoriteItems'
    camelize('My Favorite Items'); // 'myFavoriteItems'
    camelize('private-docs/owner-invoice'); // 'privateDocs/ownerInvoice'
  });

  test('classify', function (assert) {
    assert.expect(0);
    classify('innerHTML'); // 'InnerHTML'
    classify('action_name'); // 'ActionName'
    classify('css-class-name'); // 'CssClassName'
    classify('my favorite items'); // 'MyFavoriteItems'
    classify('private-docs/owner-invoice'); // 'PrivateDocs/OwnerInvoice'
  });

  test('underscore', function (assert) {
    assert.expect(0);
    underscore('innerHTML'); // 'inner_html'
    underscore('action_name'); // 'action_name'
    underscore('css-class-name'); // 'css_class_name'
    underscore('my favorite items'); // 'my_favorite_items'
    underscore('privateDocs/ownerInvoice'); // 'private_docs/owner_invoice'
  });

  test('capitalize', function (assert) {
    assert.expect(0);
    capitalize('innerHTML'); // 'InnerHTML'
    capitalize('action_name'); // 'Action_name'
    capitalize('css-class-name'); // 'Css-class-name'
    capitalize('my favorite items'); // 'My favorite items'
    capitalize('privateDocs/ownerInvoice'); // 'PrivateDocs/ownerInvoice'
  });
});
