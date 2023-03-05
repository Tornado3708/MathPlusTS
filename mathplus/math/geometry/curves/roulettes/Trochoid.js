var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Trochoid_buffer;
import Cycloid from "./Cycloid.js";
export default class Trochoid {
    static x(angle, radius = 1, distance = radius) {
        return (distance === radius ? Cycloid.x(angle, radius) : radius * angle - distance * Math.sin(angle));
    }
    static y(angle, radius = 1, distance = radius) {
        return (distance === radius ? Cycloid.y(angle, radius) : radius - distance * Math.cos(angle));
    }
    static generate(start = 0, radius = 1, distance = radius, length = Math.TAU, step = length * .001) {
        let _buffer = __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer);
        if (_buffer.start !== start || _buffer.radius !== radius || _buffer.distance !== distance || _buffer.length !== length || _buffer.step !== step) {
            __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).matrix = [];
            __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).start = start;
            __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).radius = radius;
            __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).distance = distance;
            __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).length = length;
            __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).step = step;
            for (let i = start; i < start + length; i += step) {
                __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).matrix.push([this.x(i, radius, distance), this.y(i, radius, distance)]);
            }
        }
        return __classPrivateFieldGet(this, _a, "f", _Trochoid_buffer).matrix;
    }
}
_a = Trochoid;
_Trochoid_buffer = { value: {
        start: 0,
        radius: 0,
        distance: 0,
        length: 0,
        step: 0,
        matrix: [[0, 0]]
    } };
