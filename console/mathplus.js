const version = require("./commands/version.js")
const init    = require("./commands/init.js")


const mathplus_title = `MathPlus is library for extending built-in Math project.
  \nYou can use one of next commands:
  \nversion [ -major , -minor , -patch ] -> \"version\"
  \ninit                                 -> \"initialisation\"`


const [,,command=``, ...args] = process.argv

switch(command){
  case "calculate": 
    if(args.length !== 0){
    }else{
      throw Error(`No arguments for calculations.`)
    }
    break
  case `init`: init()
    break
  case `version`: console.log(version(args[0]))
    break
  case ``: console.log(mathplus_title)
    break
  default: 
    throw Error(`'${command}' is not a command.`)
}
// console.log(command,args)