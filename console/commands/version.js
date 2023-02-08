const npm = require("./../../package.json")
const id_error = `Version id ... doesn\'t exist. Delete this id or use one of these: \n -major \n -minor \n -patch`

function version(id=``){
  let version = npm.version
  if(id.length === 0) return version
  let [ major , minor , patch ] = version.split(`.`)
  switch(id){
    case `-major`: return major
    case `-minor`: return minor
    case `-patch`: return patch
    default: throw Error(id_error.replace(`...`,`"\x1b[31m${id}\x1b[37m"`))
  }
}
module.exports = version
// {
//   version,
//   major,
//   minor,
//   patch
// }