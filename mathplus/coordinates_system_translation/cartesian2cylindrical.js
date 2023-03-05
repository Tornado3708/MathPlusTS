import azimuth from "../generic_calculations/azimuth.js";
import magnitude from "../generic_calculations/magnitude.js";
import { simpleCylinrdical } from "../simplify.js";
export default function cart2cylindric({ x, y, z }) { return simpleCylinrdical(azimuth(y, x), magnitude(x, y), z); }
