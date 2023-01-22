var _a;
const size_equality_error = Error(`Size of matrices are not same.`);
function matrix_operator(matrix_func, number_func) {
    return (matrix, arg) => {
        let name = arg.constructor.name;
        switch (name) {
            case 'Matrix' || ('Array' && arg[0].constructor.name === 'Array'):
                matrix_func(matrix, arg);
                break;
            case 'Number':
                number_func(matrix, arg);
                break;
            default: console.error(`Type of argument is not not matrix or number. Type: ${name}.`);
        }
    };
}
class Matrix extends Array {
    constructor(matrix) {
        super();
        let length = matrix[0].length;
        for (let i in matrix) {
            if (matrix[i].length === length)
                this[i] = matrix[i];
            else {
                let diff = length - matrix[i].length;
                if (diff > 0)
                    for (let i = 0; i < diff; i++) {
                        matrix[i].push(0);
                    }
                else {
                    let now = matrix[i].length;
                    for (let i = 0; i > diff; i--) {
                        matrix[i].splice(now + i, 1);
                    }
                }
            }
        }
    }
    add(add = 0) { Matrix.add(this, add); }
    sub(sub = 0) { Matrix.sub(this, sub); }
    mult(mult = 0) { Matrix.mult(this, mult); }
    div(div = 0) { Matrix.div(this, div); }
    transposing() { Matrix.transposing(this); }
    reversing() { Matrix.reversing(this); }
    get size() { return Matrix.size(this); }
    get strSize() { return Matrix.strSize(this); }
    get iSquare() { return Matrix.isSquare(this); }
    isMultAble(matrix) { return Matrix.isMultAble(this, matrix); }
    static addNumber(matrix, number = 0) {
        for (let row in matrix) {
            for (let col in matrix[row]) {
                matrix[row][col] += number;
            }
        }
    }
    static subNumber(matrix, number = 0) { this.addNumber(matrix, -number); }
    static multNumber(matrix, number = 1) {
        for (let row in matrix) {
            for (let col in matrix[row]) {
                matrix[row][col] *= number;
            }
        }
    }
    static divNumber(matrix, number = 1) { this.multNumber(matrix, 1 / number); }
    static addMatrix(main_matrix, add_matrix) {
        if (this.equalSize(main_matrix, add_matrix)) {
            for (let row in main_matrix) {
                for (let col in main_matrix[row]) {
                    main_matrix[row][col] += add_matrix[row][col];
                }
            }
        }
        else {
            throw size_equality_error;
        }
    }
    static subMatrix(main_matrix, sub_matrix) {
        let sub = sub_matrix;
        for (let row in sub) {
            for (let col in sub[row]) {
                sub[row][col] *= -1;
            }
        }
        this.addMatrix(main_matrix, sub);
    }
    static multMatrix(main_matrix, mult_matrix) {
        let res_y = main_matrix.length;
        let res_x = mult_matrix[0].length;
        let mult_y = mult_matrix.length;
        if (res_y === res_x) {
            let result = new Array(res_y);
            for (let i = 0; i < result.length; i++) {
                result[i] = new Array(res_x).fill(0);
            }
            for (let y = 0; y < result.length; y++) {
                for (let x = 0; x < result[0].length; x++) {
                    for (let i = 0; i < mult_y; i++) {
                        result[y][x] += main_matrix[x][i] * mult_matrix[i][y];
                    }
                }
            }
            for (let i = 0; i < res_y; i++) {
                main_matrix[i] = result[i];
            }
        }
        else {
            throw new Error("First matrix height is not equals to second matrix width. " + `${res_y}. Should be ${res_x}`);
        }
    }
    static divMatrix(main_matrix, div_matrix) {
        let div = div_matrix;
        for (let row in div) {
            for (let col in div[row]) {
                div[row][col] = 1 / div[row][col];
            }
        }
        this.multMatrix(main_matrix, div);
    }
    static transposing(matrix) {
        let prev = matrix;
        let row = matrix.length;
        let col = matrix[0].length;
        if (col < row) {
            let diff = row - col;
            for (let i = 0; i < diff; i++) {
                matrix.splice(row - i, 1);
            }
        }
        for (let i = 0; i < col; i++) {
            matrix.push([]);
            for (let j = 0; j > row; j++) {
                matrix[i].push(prev[i][j]);
            }
        }
    }
    static reversing(matrix) { matrix.reverse(), matrix.forEach(m => m.reverse()); }
    static size(matrix) { return [matrix[0].length, matrix.length]; }
    static strSize(matrix) {
        let [width, height] = this.size(matrix);
        return `${width}x${height}`;
    }
    static cartesianProduct(array_a, array_b) {
        let out_height = array_a.length;
        let out_width = array_b.length;
        let out = [];
        for (let y = 0; y < out_height; y++) {
            out[y] = new Array(out_width);
            for (let x = 0; x < out_width; x++) {
                out[y][x] = [array_a[y], array_b[x]];
            }
        }
        return out;
    }
    static isSquare(matrix) { return matrix.length === matrix[0].length; }
    static isMultAble(matrix_a, matrix_b) { return (matrix_a[0].length === matrix_b.length); }
    static needTranspose(matrix_a, matrix_b) { return (matrix_a.length === matrix_b[0].length); }
    static equalSize(matrix_a, matrix_b) { return (matrix_a.length === matrix_b.length) && (matrix_a[0].length === matrix_b[0].length); }
}
_a = Matrix;
Matrix.add = matrix_operator(_a.addMatrix, _a.addNumber);
Matrix.sub = matrix_operator(_a.subMatrix, _a.subNumber);
Matrix.mult = matrix_operator(_a.multMatrix, _a.multNumber);
Matrix.div = matrix_operator(_a.divMatrix, _a.divNumber);
export default Matrix;
