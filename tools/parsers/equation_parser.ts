import format from "./parsing_data/equation_format.js"
export default (expr :string , ...attrNames :string[]) => {

  let strNames = attrNames.toString()
  let token = format( expr=expr.replace(/\s/g , ``) )
  return new Function(strNames , 
    `let sequence = ${[]}
    let result = 0
    for(let i = 0; i < sequence.length; i++){
      
    }
    `)

}