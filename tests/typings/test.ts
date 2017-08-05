import {
  camelize, capitalize, classify, dasherize,
  decamelize, fmt, getStrings, loc, setStrings,
  underscore, w
} from "../../index";

function testFmt() {
  fmt("Hello %@ %@", [ 'John', 'Doe' ]);     // "Hello John Doe"
  fmt("Hello %@2, %@1", [ 'John', 'Doe' ]);  // "Hello Doe, John"
  fmt("Hello %@ %@", 'John', 'Doe');     // "Hello John Doe"
  fmt('data: %@', [{ id: 3 }]);
  fmt('%@', 'John');
}

function testLoc() {
  let oldStrings = getStrings();
  setStrings({
    '_Hello World': 'Bonjour le monde',
    '_Hello %@': 'Bonjour %@',
    '_Hello %@ %@': 'Bonjour %@ %@',
    '_Hello %@# %@#': 'Bonjour %@2 %@1'
  });

  loc("_Hello World");  // 'Bonjour le monde';
  loc("_Hello %@ %@", ["John", "Smith"]);  // "Bonjour John Smith";
  loc('_Hello %@', 'John');
  loc('_Hello %@ %@', ['John'], 'Doe');
}

function testW() {
  w("alpha beta gamma").forEach(function(key) {
    console.log(key);
  });

  // > alpha
  // > beta
  // > gamma
}

function testDecamelize() {
  decamelize('innerHTML');           // 'inner_html'
  decamelize('action_name');        // 'action_name'
  decamelize('css-class-name');     // 'css-class-name'
  decamelize('my favorite items');  // 'my favorite items'
}

function testDasherize() {
  dasherize('innerHTML');          // 'inner-html'
  dasherize('action_name');        // 'action-name'
  dasherize('css-class-name');     // 'css-class-name'
  dasherize('my favorite items');  // 'my-favorite-items'
  dasherize('privateDocs/ownerInvoice'); // 'private-docs/owner-invoice'
}

function testCamelize() {
  camelize('innerHTML');          // 'innerHTML'
  camelize('action_name');        // 'actionName'
  camelize('css-class-name');     // 'cssClassName'
  camelize('my favorite items');  // 'myFavoriteItems'
  camelize('My Favorite Items');  // 'myFavoriteItems'
  camelize('private-docs/owner-invoice'); // 'privateDocs/ownerInvoice'
}

function testClassify() {
  classify('innerHTML');          // 'InnerHTML'
  classify('action_name');        // 'ActionName'
  classify('css-class-name');     // 'CssClassName'
  classify('my favorite items');  // 'MyFavoriteItems'
  classify('private-docs/owner-invoice'); // 'PrivateDocs/OwnerInvoice'
}

function testUnderscore() {
  underscore('innerHTML');          // 'inner_html'
  underscore('action_name');        // 'action_name'
  underscore('css-class-name');     // 'css_class_name'
  underscore('my favorite items');  // 'my_favorite_items'
  underscore('privateDocs/ownerInvoice'); // 'private_docs/owner_invoice'
}

function testCapitalize() {
  capitalize('innerHTML');         // 'InnerHTML'
  capitalize('action_name');       // 'Action_name'
  capitalize('css-class-name');    // 'Css-class-name'
  capitalize('my favorite items'); // 'My favorite items'
  capitalize('privateDocs/ownerInvoice'); // 'PrivateDocs/ownerInvoice'
}
