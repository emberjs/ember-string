/**
 Returns the lowerCamelCase form of a string.

 ```javascript
 import { camelize } from '@ember/string';

 camelize('innerHTML');                   // 'innerHTML'
 camelize('action_name');                 // 'actionName'
 camelize('css-class-name');              // 'cssClassName'
 camelize('my favorite items');           // 'myFavoriteItems'
 camelize('My Favorite Items');           // 'myFavoriteItems'
 camelize('private-docs/owner-invoice');  // 'privateDocs/ownerInvoice'
 ```

 @method camelize
 @param {String} str The string to camelize.
 @return {String} the camelized string.
 @public
 */
export declare function camelize(str: string): string;

/**
 Returns the Capitalized form of a string

 ```javascript
 import { capitalize } from '@ember/string';

 capitalize('innerHTML')                 // 'InnerHTML'
 capitalize('action_name')               // 'Action_name'
 capitalize('css-class-name')            // 'Css-class-name'
 capitalize('my favorite items')         // 'My favorite items'
 capitalize('privateDocs/ownerInvoice'); // 'PrivateDocs/ownerInvoice'
 ```

 @method capitalize
 @param {String} str The string to capitalize.
 @return {String} The capitalized string.
 @public
 */
export declare function capitalize(str: string): string;

/**
 Returns the UpperCamelCase form of a string.

 ```javascript
 import { classify } from '@ember/string';

 classify('innerHTML');                   // 'InnerHTML'
 classify('action_name');                 // 'ActionName'
 classify('css-class-name');              // 'CssClassName'
 classify('my favorite items');           // 'MyFavoriteItems'
 classify('private-docs/owner-invoice');  // 'PrivateDocs/OwnerInvoice'
 ```

 @method classify
 @param {String} str the string to classify
 @return {String} the classified string
 @public
 */
export declare function classify(str: string): string;

/**
 Replaces underscores, spaces, or camelCase with dashes.

 ```javascript
 import { dasherize } from '@ember/string';

 dasherize('innerHTML');                // 'inner-html'
 dasherize('action_name');              // 'action-name'
 dasherize('css-class-name');           // 'css-class-name'
 dasherize('my favorite items');        // 'my-favorite-items'
 dasherize('privateDocs/ownerInvoice';  // 'private-docs/owner-invoice'
 ```

 @method dasherize
 @param {String} str The string to dasherize.
 @return {String} the dasherized string.
 @public
 */
export declare function dasherize(str: string): string;

/**
 Converts a camelized string into all lower case separated by underscores.

 ```javascript
 import { decamelize } from '@ember/string';

 decamelize('innerHTML');          // 'inner_html'
 decamelize('action_name');        // 'action_name'
 decamelize('css-class-name');     // 'css-class-name'
 decamelize('my favorite items');  // 'my favorite items'
 ```

 @method decamelize
 @param {String} str The string to decamelize.
 @return {String} the decamelized string.
 @public
 */
export declare function decamelize(str: string): string;

export declare function getString(name: string): string | undefined;

export declare function getStrings(): {
    [key: string]: string;
};

export declare function setStrings(strings: {
    [key: string]: string;
}): void;

/**
 More general than decamelize. Returns the lower\_case\_and\_underscored
 form of a string.

 ```javascript
 import { underscore } from '@ember/string';

 underscore('innerHTML');                 // 'inner_html'
 underscore('action_name');               // 'action_name'
 underscore('css-class-name');            // 'css_class_name'
 underscore('my favorite items');         // 'my_favorite_items'
 underscore('privateDocs/ownerInvoice');  // 'private_docs/owner_invoice'
 ```

 @method underscore
 @param {String} str The string to underscore.
 @return {String} the underscored string.
 @public
 */
export declare function underscore(str: string): string;

/**
 Splits a string into separate units separated by spaces, eliminating any
 empty strings in the process. This is a convenience method for split that
 is mostly useful when applied to the `String.prototype`.

 ```javascript
 import { w } from '@ember/string';

 w("alpha beta gamma").forEach(function(key) {
 console.log(key);
 });

 // > alpha
 // > beta
 // > gamma
 ```

 @method w
 @param {String} str The string to split
 @return {Array} array containing the split strings
 @public
 */
export declare function w(str: string): string[];

export { }
