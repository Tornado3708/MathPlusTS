import magnitude from "./magnitude.js";
import { simple3D } from "../simplify.js";
export default function unit3d({ x = 0, y = 0, z = 0 }) {
    let mag = 1 / magnitude(x, y, z);
    return simple3D(x / mag, y / mag, z / mag);
}
