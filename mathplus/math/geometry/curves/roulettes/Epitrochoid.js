var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Epitrochoid_buffer;
import Epicycloid from "./Epicycloid.js";
export default class Epitrochoid {
    static x(angle, centerR = 1, satelliteR = 1, distance = satelliteR) {
        return (distance === satelliteR
            ? Epicycloid.x(angle, centerR, satelliteR)
            : (centerR + satelliteR) * Math.cos(angle) - distance * Math.cos((centerR + satelliteR) / satelliteR * angle));
    }
    ;
    static y(angle, centerR = 1, satelliteR = 1, distance = satelliteR) {
        return (distance === satelliteR
            ? Epicycloid.y(angle, centerR, satelliteR)
            : (centerR + satelliteR) * Math.sin(angle) - distance * Math.sin((centerR + satelliteR) / satelliteR * angle));
    }
    static generate(start = 0, centerR = 1, satelliteR = 1, distance = satelliteR, length = Math.TAU, step = Math.TAU * .001) {
        __classPrivateFieldGet(this, _a, "f", _Epitrochoid_buffer).matrix = [];
        for (let i = start; i < start + length; i += step) {
            __classPrivateFieldGet(this, _a, "f", _Epitrochoid_buffer).matrix.push([
                this.x(i, centerR, satelliteR, distance),
                this.y(i, centerR, satelliteR, distance)
            ]);
        }
        return __classPrivateFieldGet(this, _a, "f", _Epitrochoid_buffer).matrix;
    }
    static get last() { return __classPrivateFieldGet(this, _a, "f", _Epitrochoid_buffer).matrix; }
}
_a = Epitrochoid;
_Epitrochoid_buffer = { value: {
        matrix: [[0, 0]]
    } };
