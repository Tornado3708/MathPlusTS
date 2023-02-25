const isString = s => (typeof s === "string")
const inNonEmptyString = s => (isString(s) && s.length > 0)
export default {
  isString,
  isNonEmptyString
}
