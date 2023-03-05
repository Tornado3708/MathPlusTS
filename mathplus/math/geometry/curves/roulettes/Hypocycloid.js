var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Hypocycloid_buffer;
class Hypocycloid {
    static x(angle, centerR = 1, satelliteR = 1) {
        let R = centerR - satelliteR;
        return R * Math.cos(angle) + satelliteR * Math.cos(R / satelliteR * angle);
    }
    static y(angle, centerR = 1, satelliteR = 1) {
        let R = centerR - satelliteR;
        return R * Math.sin(angle) - satelliteR * Math.sin(R / satelliteR * angle);
    }
    static generate(start = 0, centerR = 1, satelliteR = 1, length = Math.TAU, step = Math.TAU * .001) {
        let matrix = [];
        for (let i = start; i < start + length; i += step) {
            matrix.push([this.x(i, centerR, satelliteR), this.y(i, centerR, satelliteR)]);
        }
        return matrix;
    }
    static get last() { return __classPrivateFieldGet(this, _a, "f", _Hypocycloid_buffer).matrix; }
}
_a = Hypocycloid;
_Hypocycloid_buffer = { value: {
        matrix: [[0, 0]]
    } };
export default Hypocycloid;
