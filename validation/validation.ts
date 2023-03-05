
export const isString         = ( s:any ) :boolean => ( typeof s === "string" )
export const isNonEmptyString = ( s:any ) :boolean => ( isString( s ) && s.length > 0 )

export const isNumber         = ( n:any ) :boolean => ( typeof n === "number" )
export const isNonZero        = ( n:any ) :boolean => ( isNumber( n ) && n != 0 )

export const isObject         = ( o:any ) :boolean => ( typeof o === "object" )

export default {
  
  isString,
  isNonEmptyString,

  isNumber,
  isNonZero,

  isObject

}
