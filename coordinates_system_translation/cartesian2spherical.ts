import azimuth              from "../generic_calculations/azimuth.js"
import magnitude            from "../generic_calculations/magnitude.js"
import zenith               from "../generic_calculations/zenith.js"
import { simlpleSpherical } from "../simplify.js"


/**
 * Returns sherical coordinates, relative to given cartesian coordinates.
 * @param {point3D} [param0] Object{x: number, y: number, z: number}
 * @returns spherical
 * */
export default function cart2spheric({ x , y , z }:point3D): spherical { return simlpleSpherical(azimuth(y , x) , zenith(x , y , z) , magnitude(x , y , z)) }