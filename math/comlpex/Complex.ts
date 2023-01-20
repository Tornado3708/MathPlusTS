import azimuth   from "../../generic_calculations/azimuth.js"
import magnitude from "../../generic_calculations/magnitude.js"




type complex = { real :number , imag :number }




class Complex implements complex {

  public real: number = 0
  public imag: number = 0

  constructor({...complex}){

    this.real = complex.real ?? complex[0] ?? 0
    this.imag = complex.imag ?? complex[1] ?? 0

  }



  add ({real=0 , imag=0}){ Complex.add (this , { real           , imag           }) }
  sub ({real=0 , imag=0}){ Complex.add (this , { real: -real    , imag:-imag     }) }
  mult({real=0 , imag=0}){ Complex.mult(this , { real           , imag           }) }
  div ({real=0 , imag=0}){ Complex.mult(this , { real: 1 / real , imag: 1 / imag }) }



  get modulus (){ return Complex.modulus  (this) }
  get argument(){ return Complex.argument (this) }
  get value   (){ return Complex.value    (this) }



  static add (complex: complex,{real=0,imag=0}){ complex.real += real , complex.imag += imag }
  static sub (complex: complex,{real=0,imag=0}){ this.add(complex , { real:-real , imag:-imag }) }
  static mult(complex: complex,{real=0,imag=0}){ complex.real *= real , complex.imag *= imag }
  static div (complex: complex,{real=0,imag=0}){ this.mult(complex , { real: 1 / real , imag: 1 / imag }) }



  static modulus   ({real,imag} :complex)          :number      { return magnitude(real , imag) }
  static argument  ({real,imag} :complex)          :number      { return azimuth(imag , real) }
  static value     ({real,imag} :complex)          :number      { return magnitude(real , imag) * Math.cas(azimuth(imag,real)) }
  static toPolar   ({real,imag} :complex)          :PointPolar  { return { azimuth: azimuth(imag , real) , radius: magnitude(imag , real) } }
  static fromPolar ({azimuth,radius} :PointPolar)  :Complex     { return new Complex([Math.cos(azimuth) * radius , Math.sin(azimuth) * radius]) }


  static ZERO         :complex = { real: 0 , imag: 0 }
  static REAL_UNIT    :complex = { real: 0 , imag: 0 }
  static IMAG_UNIT    :complex = { real: 0 , imag: 1 }
  static COMPLEX_UNIT :complex = { real: 1 , imag: 1 }
}

export default Complex