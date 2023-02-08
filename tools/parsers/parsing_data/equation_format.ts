import tokens from "./equation_tokens.js"
export default (expr :string = ``) => {
  let token :{}[] = []
  let length = expr.length
  expr = expr.replace(/\s/g , ``)
  for(let i = 0; i < length; i++){
    let char = expr[i]
    switch(char){
      
      case `(`: token.push(tokens.L_BRACKET)
        break
      case `)`: token.push(tokens.R_BRACKET)
        break
    
      case `+`: token.push(tokens.ADDITION)
        break
      case `-`: token.push(tokens.SUBTRATION)
        break
      case `*`: token.push(tokens.MULTIPLICATION)
        break
      case `/`: token.push(tokens.DIVISION)
        break

      default:
        let is_num = isNumeric(char)
        let is_dot = isDot(char)
        let is_lit = isLiteral(char)
        if(is_num || is_dot){
          let number = ``
          let dot = false
          while(i < length && (isNumeric(expr[i]) || isDot(expr[i]))){
            char = expr[i]
            if(isDot(char)){
              if(!dot){
                dot = !dot
              }
              else{
                throw new Error(`Second dot has been detected at: ${i}.`)
              }
            }
            number += char
            i++
          }
          token.push( {operator :`NUMBER` , value :number} )
          i--
        }
        else if(is_lit){
          let name = ``
          while(i < length && isLiteral(expr[i])){    name += expr[i],  i++    }
          token.push( { operator :`VARIABLE` , value :name } )
          i--
        }
    }
  }

  return token
}


function isNumeric(char=""){ let code = char.charCodeAt(0); return (code >= 48 && code <= 57) }
function isDot(char=``){ return char.charCodeAt(0) === 46 }
function isLiteral(char=``){ let code = char.charCodeAt(0); return code === 95 || (code >= 65 && code <= 90) || (code >=  97 && code <= 122)}