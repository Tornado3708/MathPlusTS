var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _SpiralHyperbolic_buffer;
class SpiralHyperbolic {
    static x(angle, coefficient = 1) { return Math.cos(angle) * coefficient / angle; }
    static y(angle, coefficient = 1) { return Math.sin(angle) * coefficient / angle; }
    static generate(start = 0, coefficient = 1, length = Math.TAU, step = length * .001) {
        let _buffer = __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer);
        if (_buffer.start !== start || _buffer.coefficient !== coefficient || _buffer.length !== length || _buffer.step !== step) {
            __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).start = start;
            __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).coefficient = coefficient;
            __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).length = length;
            __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).step = step;
            __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).matrix = [];
            for (let i = start; i < start + length; i += step) {
                __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).matrix.push([this.x(i, coefficient), this.y(i, coefficient)]);
            }
        }
        return __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).matrix;
    }
    static get last() { return __classPrivateFieldGet(this, _a, "f", _SpiralHyperbolic_buffer).matrix; }
}
_a = SpiralHyperbolic;
_SpiralHyperbolic_buffer = { value: {
        start: 0,
        coefficient: 0,
        length: 0,
        step: 0,
        matrix: [[0, 0]]
    } };
export default SpiralHyperbolic;
