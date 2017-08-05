interface Strings {
  [key: string]: string;
}

export function setStrings(strings: Strings): void;
export function getStrings(): Strings;
export function get(name: string): string | undefined;

/**
 * Apply formatting options to the string. This will look for occurrences
 * of "%@" in your string and substitute them with the arguments you pass into
 * this method. If you want to control the specific order of replacement,
 * you can add a number after the key as well to indicate which argument
 * you want to insert.
 *
 * @deprecated Use ES6 template strings instead: http://babeljs.io/docs/learn-es2015/#template-strings
 */
export function fmt(str: string, formats: any[]): string;
export function fmt(str: string, ...formats: any[]): string;

/**
 * Formats the passed string, but first looks up the string in the localized
 * strings hash. This is a convenient way to localize text. See
 * `Ember.String.fmt()` for more information on formatting.
 */
export function loc(str: string, formats: any[]): string;
export function loc(str: string, ...formats: any[]): string;

/**
 * Splits a string into separate units separated by spaces, eliminating any
 * empty strings in the process. This is a convenience method for split that
 * is mostly useful when applied to the `String.prototype`.
 */
export function w(str: string): string[];

/**
 * Converts a camelized string into all lower case separated by underscores.
 */
export function decamelize(str: string): string;

/**
 * Replaces underscores, spaces, or camelCase with dashes.
 */
export function dasherize(str: string): string;

/**
 * Returns the lowerCamelCase form of a string.
 */
export function camelize(str: string): string;

/**
 * Returns the UpperCamelCase form of a string.
 */
export function classify(str: string): string;

/**
 * More general than decamelize. Returns the lower\_case\_and\_underscored
 * form of a string.
 */
export function underscore(str: string): string;

/**
 * Returns the Capitalized form of a string
 */
export function capitalize(str: string): string;
