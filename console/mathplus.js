const version = require("./commands/version.js")


const mathplus_title = `MathPlus is library for extending built-in Math project.`


const [,,command=``, ...args] = process.argv
// console.log(process.argv)
switch(command){
  case "calculate": 
    if(args.length !== 0){
      console.log(args)
    }else{
      throw Error(`No arguments for calculations.`)
    }
    case `version`: console.log(version(args[0]))
    break
  case ``: console.log(mathplus_title)
    break
  default: 
    throw Error(`'${command}' is not a command.`)
}
// console.log(command,args)