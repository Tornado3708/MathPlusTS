const { exec } = require('child_process')
const fs       = require('fs')

function init(){
  
  exec('echo "OK"')
  console.log(`Initialisation finished`)

}

module.exports = init