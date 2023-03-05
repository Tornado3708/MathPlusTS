export const isString = (s) => (typeof s === "string");
export const isNonEmptyString = (s) => (isString(s) && s.length > 0);
export const isNumber = (n) => (typeof n === "number");
export const isNonZero = (n) => (isNumber(n) && n != 0);
export const isObject = (o) => (typeof o === "object");
export default {
    isString,
    isNonEmptyString,
    isNumber,
    isNonZero,
    isObject
};
