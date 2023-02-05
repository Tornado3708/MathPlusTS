/**
 * Polygon for representation of stars.
 * */
export default class Star {

  static #buffer = {
    main: 0,
    sub: 0,
    star: [[0,0]],
    one: 0
  }

  /**
   * Returns star in matrix form.
   * @param {{x :number , y :number , peaks :number, in_radius :number, out_radius :number, angle :number}} [param0] Object.{x :number, y :number, peaks :number, in_radius :number, out_radius :number, angle :number}
   * @returns {number[]} Array with points in matrix form.
   * */
  static generate({x = 0, y = 0 , peaks = 0 , in_radius = 0, out_radius = 0, angle = 0}: { x: number; y: number; peaks: number; in_radius: number; out_radius: number; angle: number}): number[][]{
    this.#buffer.star = []
    this.#buffer.one = Math.TAU * (1 / peaks)
    for(let i = 0; i < peaks; i++){
      this.#buffer.main = this.#buffer.one * i + angle
      this.#buffer.sub  = this.#buffer.main + this.#buffer.one * .5
      this.#buffer.star.push(
        [ x + Math.cos(this.#buffer.main) * out_radius , y + Math.sin(this.#buffer.main) * out_radius ],
        [ x + Math.cos(this.#buffer.sub)  * in_radius  , y + Math.sin(this.#buffer.sub)  * in_radius  ]
      )
    }
    return this.#buffer.star
  }
  /**
   * Returns last generated star (for optimisation).
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
   * */
  static last(): matrix { return this.#buffer.star }

}