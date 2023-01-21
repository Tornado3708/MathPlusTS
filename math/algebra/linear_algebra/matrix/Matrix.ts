const size_equality_error = Error(`Size of matrices are not same.`)

function matrix_operator(
  matrix_func: (matrix: matrix, arg: matrix) => void,
  number_func: (matrix: matrix, arg: number) => void){
    return (matrix: matrix, arg: any): void => {
      let name = arg.constructor.name
      switch(name){
        case 'Matrix' || ('Array' && arg[0].constructor.name === 'Array') : matrix_func(matrix, arg)
          break
        case 'Number': number_func(matrix, arg)
         break
        default: console.error(`Type of argument is not not matrix or number. Type: ${name}.`) } } }



type num_mat = number | matrix

/**Class for representation of matrix.*/
class Matrix extends Array implements matrix {

  /**
   * Creates Matrix using 2-dimensional array.
   * @param {matrix} matrix 2-dimensional array.
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
   * Addition function. Gets matrix or number as second parameter.
   * @param {number | matrix} add Matrix or number for addition.
   * */
  add (add: number | matrix=0)  :void { Matrix.add (this ,  add) }

  /**
   * Subtraction function. Gets matrix or number as second parameter.
   * @param {number | matrix} sub Matrix or number for subtraction.
   * */
  sub (sub: number | matrix=0)  :void { Matrix.sub (this ,  sub) }

  /**
   * Multiplication function. Gets matrix or number as second parameter.
   * @param {number | matrix} mult Matrix or number for multiplication.
   * */
  mult(mult: number | matrix=0) :void { Matrix.mult(this , mult) }

  /**
   * Division function. Gets matrix or number as second parameter.
   * @param {number | matrix} div Matrix or number for division. 
   * */
  div (div: number | matrix=0)  :void { Matrix.div (this ,  div) }

  /**Transpose matrix.*/
  transposing() :void { Matrix.transposing(this) }
  
  /**Reversing matrix.*/
  reversing()   :void { Matrix.reversing  (this) }

  /**
   * Returns size of matrix as array. [Matrix[0].length , Matrix.length].
   * @returns [ number , number ]
   * */
  get size() :[number,number] { return Matrix.size(this) }

  /**
   * Returns size of matrix as string. "Matrix[0].length , Matrix.length".
   * @returns String
   * */
  get strSize() :string { return Matrix.strSize(this) }

  /**
   * Returns true if matrix row count is eqiuvalent to matrix column count. Else returns false.
   * @returns Boolean
   * */
  get iSquare() :boolean { return Matrix.isSquare(this) }


  /**
   * Returns true if this matrix width and given matrix height are same.
   * @param {matrix} [matrix] Given matrix.
   * @returns Boolean 
   * */
  isMultAble (matrix :matrix) :boolean { return Matrix.isMultAble(this , matrix) }



  /**
   * Addition function. Gets number as second parameter.
   * @param {matrix} [matrix] [matrix]
   * @param {number} [number] [number]
   * */
  static addNumber (matrix :matrix , number :number=0) :void {
    for(let row in matrix){
      for(let col in matrix[row]){
        matrix[row][col] += number
      }
    }
  }
  
  /**
   * Subtraction function. Gets number as second parameter.
   * @param {matrix} [matrix] [matrix]
   * @param {number} [number] [number]
   * */
  static subNumber (matrix :matrix , number :number=0) :void { this.addNumber(matrix, -number) }

  /**
   * Multiplication function. Gets number as second parameter.
   * @param {matrix} [matrix] [matrix] 
   * @param {number} [number] [number]
   * */
  static multNumber(matrix :matrix , number :number=1) :void {
    for(let row in matrix){
      for(let col in matrix[row]){
        matrix[row][col] *= number
      }
    }
  }
  
  /**
   * Division function. Gets number as second parameter.
   * @param {matrix} [matrix] [matrix] 
   * @param {number} [number] [number] 
   * */
  static divNumber (matrix :matrix , number :number=1) :void { this.multNumber(matrix, 1 / number) }

  /**Addition function. Gets matrix as second parameter.
   * @param {matrix} main_matrix Matrix for changing.
   * @param {matrix} add_matrix  Matrix for addition.
   * */
  static addMatrix (main_matrix :matrix , add_matrix :matrix) :void {
    if(this.equalSize(main_matrix,add_matrix)){
      for(let row in main_matrix){
        for(let col in main_matrix[row]){
            main_matrix[row][col] += add_matrix[row][col]
        }
      }
    }else{
      throw size_equality_error
    }
  }

  /**
   * Subtraction function. Gets matrix as second parameter.
   * @param {matrix} [main_matrix] Matrix for changing. 
   * @param {matrix} [sub_matrix] Matrix for substraction.
   * */
  static subMatrix (main_matrix :matrix , sub_matrix :matrix) :void {
    let sub = sub_matrix
    for(let row in sub){
      for(let col in sub[row]){
        sub[row][col] *= -1
      }
    }
    this.addMatrix(main_matrix , sub)
  }

  /**
   * Multiplication function. Gets matrix as second parameter.
   * @param {matrix} main_matrix Matrix for changing.
   * @param {matrix} mult_matrix Matrix for multiplication.
   * */
  static multMatrix(main_matrix :matrix , mult_matrix :matrix) :void {
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

  /**
   * Division function. Gets matrix as second parameter.
   * @param {matrix} main_matrix Matrix for changing. 
   * @param {matrix} div_matrix Matrix for division.
   * */
  static divMatrix (main_matrix :matrix , div_matrix :matrix) :void {
    let div = div_matrix
    for(let row in div){ for(let col in div[row]){ div[row][col] = 1 / div[row][col] } }
    this.multMatrix(main_matrix, div)
  }

  /**
   * Addition function. Gets matrix or number as second parameter.
   * @param {matrix}  [matrix] [matrix]
   * @param {num_mat} [arg]    Number or matrix for addition.
   * */
  static add = matrix_operator(this.addMatrix  , this.addNumber)

  /**
   * Subtraction function. Gets matrix or number as second parameter.
   * @param {matrix}  [matrix] [matrix]
   * @param {num_mat} [arg]    Number or matrix for subtraction.
   * */
  static sub = matrix_operator(this.subMatrix  , this.subNumber)
  
  /**
   * Multiplication function. Gets matrix or number as second parameter.
   * @param {matrix}  [matrix] [matrix]
   * @param {num_mat} [arg]    Number or matrix for multiplication.
   * */
  static mult = matrix_operator(this.multMatrix , this.multNumber)

  /**
   * Division function. Gets matrix or number as second parameter.
   * @param {matrix}  [matrix] [matrix]
   * @param {num_mat} [arg]    Number or matrix for division.
   */
  static div = matrix_operator(this.divMatrix  , this.divNumber)



  /**
   * Transposing of matrix.
   * @param {matrix} [matrix] [matrix]
   * */
  static transposing(matrix :matrix) :void {
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

  /**
   * Reversing of matrix.
   * @param {matrix} [matrix] [matrix] 
   * */
  static reversing(matrix :matrix) :void { matrix.reverse() , matrix.forEach(m => m.reverse()) } 



  /**
   * Returns array with size parameters of given matrix.
   * @param {matrix} [matrix] [matrix]
   * @returns [matrix[0].length , matrix.length]
   * */
  static size(matrix: matrix) :[number,number] { return [ matrix[0].length , matrix.length ] }

  /**
   * Returns string with 
   * @param {matrix} [matrix] [matrix] 
   * @returns `${matrix[0].length}x${matrix.length}`
   * */
  static strSize(matrix: matrix) :string {
    let [width,height] = this.size(matrix)
    return `${width}x${height}`
  }




  /**
   * Returns cartesian product of two 1-dimensional arrays.
   * @param {number[]} array_a Array A.
   * @param {number[]} array_b Array B.
   * @returns number[][][]
   * */
  static cartesianProduct(array_a :number[], array_b :number[]) :number[][][] {
    let out_height = array_a.length
    let out_width  = array_b.length
    let out = []
    for(let y = 0; y < out_height; y++){
      out[y] = new Array(out_width)
      for(let x = 0; x < out_width; x++){
        out[y][x] = [array_a[y] , array_b[x]]
      }
    }
    return out
  }

  



  /**
   * Returns true if [matrix] width equals to [matrix] height.
   * @param {matrix} [matrix] [matrix] 
   * @returns Boolean
   * */
  static isSquare(matrix :matrix){ return matrix.length === matrix[0].length }

  /**
   * Returns true is [matrix_a] width equals to [matrix_b] height.
   * @param {matrix} [matrix_a] [matrix_a]
   * @param {matrix} [matrix_b] [matrix_b]
   * @returns Boolean
   * */
  static isMultAble(matrix_a :matrix , matrix_b :matrix) :boolean { return (matrix_a[0].length === matrix_b.length) }

  /**
   * Returns true if [matrix_a] height equals to [matrix_b] width.
   * @param {matrix} matrix_a [matrix_a]
   * @param {matrix} matrix_b [matrix_b]
   * @returns Boolean
   * */
  static needTranspose(matrix_a :matrix , matrix_b :matrix) :boolean { return (matrix_a.length === matrix_b[0].length) }

  /**
   * Returns true if matrices heights are equals and matrices widths are equals.
   * @param {matrix} matrix_a [matrix_a]
   * @param {matrix} matrix_b [matrix_b]
   * @returns Boolean
   */
  static equalSize(matrix_a :matrix , matrix_b :matrix) :boolean { return (matrix_a.length === matrix_b.length) && (matrix_a[0].length === matrix_b[0].length) }
}
  

export default Matrix