import azimuth from "../generic_calculations/azimuth.js";
import magnitude from "../generic_calculations/magnitude.js";
import { simpleCylinrdical } from "../simplify.js";


/**
 * Returns cylindrical coordinates, relative to given cartesian coordinates.
 * @param {polar} [param0] Polar parameters.
 * @returns cylindrical
 * */
export default function cart2cylindric({ x , y , z } :point3D) :cylindrical { return simpleCylinrdical(azimuth(y , x) , magnitude(x , y) , z) }