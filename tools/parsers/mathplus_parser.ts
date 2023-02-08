/**
 * Parser, that includes all classes from mathplus library.
 * @param {string} [expr] Formula expression.
 * @param {string[]} [attrNames] Attributes for function.
 * @return {Function} Function for formula calculation.
 * */

export default(expr:string=``,...attrNames:string[]): Function => {
  
  let attr = attrNames.toString()
  return new Function(attr,`console.log()`)

}