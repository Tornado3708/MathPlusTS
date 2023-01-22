import azimuth         from "../generic_calculations/azimuth.js"
import magnitude       from "../generic_calculations/magnitude.js"
import { simplePolar } from "../simplify.js"

/**
 * Returns cartesian position to polar position.
 * @param {point2D} [param0] Object.{x: number, y: number} 
 * @returns polar
 * */
export default function cart2polar({x=0,y=0} :point2D): polar { return simplePolar(azimuth(y,x),magnitude(x,y)) }