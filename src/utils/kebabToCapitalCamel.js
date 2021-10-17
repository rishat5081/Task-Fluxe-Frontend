import { capitalize } from "utils";

/**
 * Transform given kebab-case string to CapitalCamel string
 * @param {string} str Given string
 * @returns {string} CapitalCamelized string
 */
export default (str) =>
  str
    ?.split("-")
    .map((n) => capitalize(n))
    .join("");
