# 1.0.0

## `fmt`
### until: 2.0.0
### id: ember-string-fmt

This utility was included to ease the transition from the
internal Ember string package to this addon.
We suggest that you update your code to use [ES2015 template strings](http://babeljs.io/docs/learn-es2015/#template-strings).

For example, if you have the following `fmt` uses:

```javascript
import { fmt } from "@ember/string";

let firstName = "John";
let lastName = "Doe";

fmt("Hello %@ %@", firstName, lastName); // "Hello John Doe"
fmt("Hello %@2, %@1", firstName, lastName); // "Hello Doe, John"
```

You can instead use the following template strings:

```javascript
import { fmt } from "@ember/string";

let firstName = "John";
let lastName = "Doe";

`Hello ${firstName} ${lastName}` // "Hello John Doe"
`Hello ${lastName}, ${firstName}` // "Hello Doe, John"
```


## `loc`
### until: 2.0.0
### id: ember-string-loc

This utility was included to ease the transition from the
internal Ember string package to this addon.
You can consult the [Ember deprecation guide for loc](https://emberjs.com/deprecations/v2.x#toc_code-ember-string-loc-code-and-code-import-loc-from-ember-string-code) for further
instructions on how to update your code.
