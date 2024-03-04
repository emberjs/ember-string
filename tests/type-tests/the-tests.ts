import {
  dasherize,
  camelize,
  capitalize,
  classify,
  decamelize,
  underscore,
  w,
} from '@ember/string';

import { expectTypeOf } from 'expect-type';

// @ts-expect-error
dasherize();
// @ts-expect-error
dasherize('', '');

expectTypeOf(dasherize('blue man group')).toBeString();

// @ts-expect-error
camelize();
// @ts-expect-error
camelize('', '');

expectTypeOf(camelize('blue man group')).toBeString();

// @ts-expect-error
decamelize();
// @ts-expect-error
decamelize('', '');

expectTypeOf(decamelize('blue man group')).toBeString();

// @ts-expect-error
underscore();
// @ts-expect-error
underscore('', '');

expectTypeOf(underscore('blue man group')).toBeString();

// @ts-expect-error
w();
// @ts-expect-error
w('', '');

expectTypeOf(w('blue man group')).toMatchTypeOf<string[]>();

// @ts-expect-error
classify();
// @ts-expect-error
classify('', '');

expectTypeOf(classify('blue man group')).toBeString();

// @ts-expect-error
capitalize();
// @ts-expect-error
capitalize('', '');

expectTypeOf(capitalize('blue man group')).toBeString();
