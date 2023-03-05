var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _SpiralGolden_buffer;
class SpiralGolden {
    static x(angle, mult = 1) {
        let radius = mult * Math.pow(Math.PHI, (2 * angle * (1 / Math.PI)));
        return Math.cos(angle) * radius;
    }
    static y(angle, mult = 1) {
        let radius = mult * Math.pow(Math.PHI, (2 * angle * (1 / Math.PI)));
        return Math.sin(angle) * radius;
    }
    static generate(start = 0, mult = 1, length = Math.TAU, step = length * .001) {
        let _buffer = __classPrivateFieldGet(this, _a, "f", _SpiralGolden_buffer);
        if (_buffer.start !== start ||
            _buffer.mult !== mult ||
            _buffer.length !== length ||
            _buffer.step !== step) {
            __classPrivateFieldGet(this, _a, "f", _SpiralGolden_buffer).matrix = [];
            for (let i = start; i < start + length; i += step) {
                __classPrivateFieldGet(this, _a, "f", _SpiralGolden_buffer).matrix.push([this.x(i, mult), this.y(i, mult)]);
            }
        }
        return __classPrivateFieldGet(this, _a, "f", _SpiralGolden_buffer).matrix;
    }
    static get last() { return __classPrivateFieldGet(this, _a, "f", _SpiralGolden_buffer).matrix; }
}
_a = SpiralGolden;
_SpiralGolden_buffer = { value: {
        matrix: [[0, 0]],
        start: 0,
        mult: 0,
        length: 0,
        step: 0
    } };
export default SpiralGolden;
