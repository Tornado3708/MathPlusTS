
const isString         = ( s:any ) :boolean => ( typeof s === "string" )
const isNonEmptyString = ( s:any ) :boolean => ( isString( s ) && s.length > 0 )

const isNumber         = ( n:any ) :boolean => ( typeof n === "number" )
const isNonZero        = ( n:any ) :boolean => ( isNumber( n ) && n != 0 )

export default {
  
  isString,
  isNonEmptyString,
  isNumber,
  isNonZero

}
