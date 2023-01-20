function matrix_operator(
  matrix_func: (matrix: matrix | Matrix, arg: matrix | Matrix) => void,
  number_func: (matrix: matrix | Matrix, arg: number) => void){
    return (matrix: matrix | Matrix, arg: any): void => {
      let name = arg.constructor.name
      switch(name){
        case 'Matrix' || ('Array' && arg[0].constructor.name === 'Array') : matrix_func(matrix, arg)
          break
        case 'Number': number_func(matrix, arg)
         break
        default: console.error(`Type of argument is not not matrix or number. Type: ${name}.`) } } }





/**Class for representation of matrix.*/
class Matrix extends Array implements matrix {

  /**
   * Creates Matrix using 2-dimensional array.
   * @param {number[][]} matrix 2-dimensional array.
   */
  constructor(matrix: matrix){
    super()
    let length = matrix[0].length
    for(let i in matrix){
      if(matrix[i].length === length) this[i] = matrix[i]
      else{
        let diff = length - matrix[i].length
        if(diff > 0) for(let i = 0; i < diff; i++){ matrix[i].push(0) }
        else{
          let now = matrix[i].length
          for(let i = 0; i > diff; i--){ matrix[i].splice(now + i, 1) }
        }
      }
    }
  }

  
  /**
   * Addition function.
   * @param {number | matrix} add Matrix or number for addition.
   */
  add (add: number | matrix=0)  :void { Matrix.add (this ,  add) }

  /**
   * Subtraction function.
   * @param {number | matrix} sub Matrix or number for subtraction.
   */
  sub (sub: number | matrix=0)  :void { Matrix.sub (this ,  sub) }

  /**
   * Multiplication function.
   * @param {number | matrix} mult Matrix or number for multiplication.
   */
  mult(mult: number | matrix=0) :void { Matrix.mult(this , mult) }

  /**
   * Division function.
   * @param {number | matrix} div Matrix or number for division. 
   */
  div (div: number | matrix=0)  :void { Matrix.div (this ,  div) }

  transposing() :void { Matrix.transposing(this) }
  reversing()   :void { Matrix.reversing  (this) }

  get size()    :number[] { return Matrix.size(this) }
  get strSize() :string   { return Matrix.strSize(this) }

  get iSquare() :boolean { return Matrix.isSquare(this) }
  equalSize  (matrix :matrix | Matrix) :boolean { return Matrix.isEqualSize (this , matrix) }
  isMultAble (matrix :matrix | Matrix) :boolean { return Matrix.isMultAble  (this , matrix) }



  static addNumber (matrix :matrix | Matrix , number :number=0) :void { for(let row in matrix) { for(let col in matrix[row]) { matrix[row][col] += number } } }
  static subNumber (matrix :matrix | Matrix , number :number=0) :void { this.addNumber(matrix, -number) }
  static multNumber(matrix :matrix | Matrix , number :number=1) :void { for(let row in matrix) { for(let col in matrix[row]){ matrix[row][col] *= number } } }
  static divNumber (matrix :matrix | Matrix , number :number=1) :void { this.multNumber(matrix, 1 / number) }

  static addMatrix (main_matrix :matrix | Matrix , add_matrix :matrix | Matrix) :void {
    if(!this.isSquare(add_matrix) && this.isMultAble(main_matrix ,add_matrix)){ this.transposing(add_matrix) }
    if(this.isEqualSize(main_matrix , add_matrix)){
      for(let row in main_matrix){
        for(let col in main_matrix[row]){
          main_matrix[row][col] += add_matrix[row][col]
        }
      }
    }
  }

  static subMatrix (main_matrix :matrix | Matrix , sub_matrix :matrix | Matrix) :void {
    let sub = sub_matrix
    for(let row in sub){ for(let col in sub[row]){ sub[row][col] *= -1 } }
    this.addMatrix(main_matrix , sub)
  }
  static multMatrix(main_matrix :matrix | Matrix , mult_matrix :matrix | Matrix) :void {
    let res_y  = main_matrix.length
    let res_x  = mult_matrix[0].length
    let mult_y = mult_matrix.length
    
    if(res_y === res_x){
      let result = new Array(res_y)
      for(let i = 0; i < result.length; i++){ result[i] = new Array(res_x).fill(0) }
      for(let y = 0; y < result.length; y++){
        for(let x = 0; x < result[0].length; x++){
          for(let i = 0; i < mult_y; i++){
            result[y][x] += main_matrix[x][i] * mult_matrix[i][y]
          }
        }
      }
      for(let i = 0; i < res_y; i++){ main_matrix[i] = result[i] }
    } else {
      throw new Error("First matrix height is not equals to second matrix width. "+`${res_y}. Should be ${res_x}`)
    }
  }

  static divMatrix (main_matrix :matrix | Matrix , div_matrix :matrix | Matrix) :void {
    let div = div_matrix
    for(let row in div){ for(let col in div[row]){ div[row][col] = 1 / div[row][col] } }
    this.multMatrix(main_matrix, div)
  }

  static add  = matrix_operator(this.addMatrix  , this.addNumber)
  static sub  = matrix_operator(this.subMatrix  , this.subNumber)
  static mult = matrix_operator(this.multMatrix , this.multNumber)
  static div  = matrix_operator(this.divMatrix  , this.divNumber)

  static transposing(matrix :matrix | Matrix) :void {
    let prev = matrix
    let row = matrix.length
    let col = matrix[0].length
    if(col < row){
      let diff = row - col
      for(let i = 0; i < diff; i++){ matrix.splice(row - i , 1) }
    }
    for(let i = 0; i < col; i++) {
      matrix.push([])
      for(let j = 0; j > row; j++){ matrix[i].push(prev[i][j]) }
    }
  }

  static reversing(matrix :matrix | Matrix) :void {
    matrix.reverse()
    matrix.forEach(m => m.reverse())
  } 

  static size(matrix: matrix | Matrix) :number[] { return [ matrix[0].length , matrix.length ] }
  static strSize(matrix: matrix | Matrix) :string {
    let [width,height] = this.size(matrix)
    return `${width}x${height}`
  }
  static isSquare   (matrix   :matrix | Matrix){ return matrix.length === matrix[0].length }
  static isEqualSize(matrix_a :matrix | Matrix , matrix_b :matrix | Matrix) :boolean { return ((matrix_a.length === matrix_b.length) && (matrix_a[0].length === matrix_b[0].length)) }
  static isMultAble (matrix_a :matrix | Matrix , matrix_b :matrix | Matrix) :boolean { return (matrix_a.length === matrix_b[0].length) }

}
  

export default Matrix