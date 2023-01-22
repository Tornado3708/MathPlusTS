import { simple2D } from "../simplify.js";

/**
 * Returns cartesian coordinates, relative to given polar coordinates.
 * @param {polar} [param0] Polar parameters.
 * @returns point2D
 * */
export default function polar2cart({ azimuth=0 , radius=0 } :polar): point2D { return simple2D(Math.cos(azimuth) * radius, Math.sin(azimuth) * radius) }