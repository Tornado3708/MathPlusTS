var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Hypotrochoid_buffer;
import Hypocycloid from "./Hypocycloid.js";
export default class Hypotrochoid {
    static x(angle, centerR = 1, satelliteR = 1, length = satelliteR) {
        return (length === satelliteR
            ? Hypocycloid.x(angle, centerR, satelliteR)
            : (centerR - satelliteR) * Math.cos(angle + length * Math.cos((centerR - satelliteR) / satelliteR * angle)));
    }
    static y(angle, centerR = 1, satelliteR = 1, length = satelliteR) {
        return (length === satelliteR
            ? Hypocycloid.y(angle, centerR, satelliteR)
            : (centerR - satelliteR) * Math.sin(angle - length * Math.sin((centerR - satelliteR) / satelliteR * angle)));
    }
    static generate(start = 0, centerR = 1, satelliteR = 1, length = Math.TAU, step = length * .001) {
        __classPrivateFieldGet(this, _a, "f", _Hypotrochoid_buffer).matrix = [];
        for (let i = start; i < start + length; i += step) {
            __classPrivateFieldGet(this, _a, "f", _Hypotrochoid_buffer).matrix.push([
                this.x(i, centerR, satelliteR),
                this.y(i, centerR, satelliteR)
            ]);
        }
        return __classPrivateFieldGet(this, _a, "f", _Hypotrochoid_buffer).matrix;
    }
    static get last() { return __classPrivateFieldGet(this, _a, "f", _Hypotrochoid_buffer).matrix; }
}
_a = Hypotrochoid;
_Hypotrochoid_buffer = { value: {
        matrix: [[0, 0]]
    } };
