/**
 * Capitalize first char of the given string
 * @param {string} str Given string
 * @return {string} First char capitalized string
 */
export default (str) => str.charAt(0).toUpperCase() + str.slice(1);
