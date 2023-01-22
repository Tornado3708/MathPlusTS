import magnitude from "./magnitude.js";
import { simple2D } from "../simplify.js";
export default function unit2d({ x = 0, y = 0 }) {
    let mag = 1 / magnitude(x, y);
    return simple2D(x / mag, y / mag);
}
