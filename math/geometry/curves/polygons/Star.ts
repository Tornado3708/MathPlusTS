var main = 0
var sub  = 0
var star = [[0,0]]
var one = 0
/**
 * Polygon for representation of stars.
 * */
export default class Star {

  /**
   * Returns star in matrix form.
   * @param {{x :number , y :number , peaks :number, in_radius :number, out_radius :number, angle :number}} [param0] Object.{x :number, y :number, peaks :number, in_radius :number, out_radius :number, angle :number}
   * @returns {number[]} Array with points in matrix form.
   * */
  static generate({x = 0, y = 0 , peaks = 0 , in_radius = 0, out_radius = 0, angle = 0}: { x: number; y: number; peaks: number; in_radius: number; out_radius: number; angle: number}): number[][]{
    star = []
    one = Math.TAU * (1 / peaks)
    for(let i = 0; i < peaks; i++){
      main = one * i + angle
      sub  = main + one * .5
      star.push(
        [ x + Math.cos(main) * out_radius , y + Math.sin(main) * out_radius ],
        [ x + Math.cos(sub)  * in_radius  , y + Math.sin(sub)  * in_radius  ]
      )
    }
    return star
  }
  /**
   * Returns last generated star (for optimisation).
   * @returns {matrix} number[][]
   * */
  static last(): matrix { return star }

}