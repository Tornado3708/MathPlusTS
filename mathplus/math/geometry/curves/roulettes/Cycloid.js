var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Cycloid_buffer;
class Cycloid {
    static x(angle, radius = 1) { return radius * (angle - Math.sin(angle)); }
    static y(angle, radius = 1) { return radius * (1 - Math.cos(angle)); }
    static generate(start = 0, length = Math.TAU, radius = 1, step = Math.TAU * .001) {
        if (__classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).start !== start || __classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).length !== length || __classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).radius !== radius || __classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).step !== step) {
            __classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).matrix = [];
            for (let i = start; i < start + length; i += step) {
                __classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).matrix.push([this.x(i, radius), this.y(i, radius)]);
            }
        }
        return __classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).matrix;
    }
    static get last() { return __classPrivateFieldGet(this, _a, "f", _Cycloid_buffer).matrix; }
}
_a = Cycloid;
_Cycloid_buffer = { value: {
        start: 0, length: 0, radius: 0, step: 0,
        matrix: [[0, 0]]
    } };
export default Cycloid;
