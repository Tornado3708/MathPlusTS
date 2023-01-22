import azimuth   from "../../generic_calculations/azimuth.js"
import magnitude from "../../generic_calculations/magnitude.js"




type complex = { real :number , imag :number }



/**Represing complex number.*/
export default class Complex implements complex {

  public real: number = 0
  public imag: number = 0

  /**
   * - { real : number , imag : number }
   * - [ real : number , imag : number ]
   * @param {complex | number[]} [param0] Parameters for constructor.
   * */
  constructor({...complex} :any){

    this.real = complex.real ?? complex[0] ?? 0
    this.imag = complex.imag ?? complex[1] ?? 0

  }



  /**
   * Addition function.
   * @param {complex} [param0] Object with parameters.
   * */
  add = ({real=0 , imag=0} :complex) => Complex.add(this , { real , imag }) 

  /**
   * Subtraction function.
   * @param {complex} [param0] Object with parameters.
   * */
  sub = ({real=0 , imag=0} :complex) => Complex.add(this , { real: -real , imag: -imag }) 

  /**
   * Multiplication function.
   * @param {complex} [param0] Object with parameters.
   * */
  mult = ({real=0 , imag=0} :complex) => Complex.mult(this , { real , imag }) 

  /**
   * Division function.
   * @param {complex} [param0] Object with parameters.
   * */
  div = ({real=0 , imag=0} :complex) => Complex.mult(this , { real: 1 / real , imag: 1 / imag }) 



  
  /**Returns modulus of this complex number.*/
  get modulus(){ return Complex.modulus(this) }

  /**Returns argument of this complex number.*/
  get argument(){ return Complex.argument(this) }




  /**
   * Addition function.
   * @param {complex} [complex] Given complex number.
   * @param {complex} [param1] Complex number for addition.
   * */
  static add(complex: complex,{real=0,imag=0}: complex): void { complex.real += real , complex.imag += imag }

  /**
   * Subtraction function.
   * @param {complex} [complex] Given complex number.
   * @param {complex} [param1] Complex number for subtraction.
   * */
  static sub(complex: complex,{real=0,imag=0}: complex): void { this.add(complex , { real:-real , imag:-imag }) }

  /**
   * Multiplication function.
   * @param {complex} [complex] Given complex number.
   * @param {complex} [param1] Complex number for multiplication.
   * */
  static mult(complex: complex,{real=0,imag=0}: complex): void { complex.real *= real , complex.imag *= imag }

  /**
   * Division function.
   * @param {complex} [complex] Given complex number.
   * @param {complex} [param1] Complex number for division.
   * */
  static div(complex: complex,{real=0,imag=0}: complex): void { this.mult(complex , { real: 1 / real , imag: 1 / imag }) }



  
  /**
   * Returns modulus of given object from complex number parameters.
   * @param {complex} [param0] Given complex number.
   * @returns Number
   * */
  static modulus({real,imag} :complex) :number { return magnitude(real , imag) }
  
  /**
   * Returns argument of given object from complex number parameters.
   * @param {complex} [param0] Given complex number.
   * @returns Number
   * */
  static argument({real,imag} :complex) :number { return azimuth(imag , real) }




  /**
   * Returns modulus and argument of given complex number.
   * @param {complex} [param0] Given complex number.
   * @returns Object.{ modulus : number, argument : number }
   * */
  static toPolar({real,imag} :complex) :{ argument :number, modulus :number} { return { argument: azimuth(imag , real) , modulus: magnitude(imag , real) } }

  /**
   * Returns complex number from it`s argument and modulus.
   * @param {{argument: number, modulus: number}} [param0] Argument and modulus.
   * @returns Complex
   * */
  static fromPolar({argument=0,modulus=0}: { argument: number; modulus: number }) :Complex { return new Complex([Math.cos(argument) * modulus , Math.sin(argument) * modulus]) }




  static ZERO         :complex = { real: 0 , imag: 0 }
  static REAL_UNIT    :complex = { real: 1 , imag: 0 }
  static IMAG_UNIT    :complex = { real: 0 , imag: 1 }
  static COMPLEX_UNIT :complex = { real: 1 , imag: 1 }

}