const { exec } = require('child_process')
const fs       = require('fs')

function init(){
  
  exec('tsc --build' ,

    ( error , attr1 ,attr2 ) => {
      
      if(error) throw new Error(error)
      console.log( attr1 , attr2 )
    })

  console.log(`Initialisation finished`)

}

module.exports = init