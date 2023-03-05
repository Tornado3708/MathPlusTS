var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Lituus_buffer;
export default class Lituus {
    static x(angle, coefficient = 1) { return Math.cos(angle) * coefficient * (1 / Math.sqrt(angle)); }
    static y(angle, coefficient = 1) { return Math.sin(angle) * coefficient * (1 / Math.sqrt(angle)); }
    static generate(start = 0, coefficient = 1, length = Math.TAU, step = length * .001) {
        __classPrivateFieldGet(this, _a, "f", _Lituus_buffer).matrix = [];
        for (let i = start; i < start + length; i += step) {
            __classPrivateFieldGet(this, _a, "f", _Lituus_buffer).matrix.push([this.x(i, coefficient), this.y(i, coefficient)]);
        }
        return __classPrivateFieldGet(this, _a, "f", _Lituus_buffer).matrix;
    }
    static last() { return __classPrivateFieldGet(this, _a, "f", _Lituus_buffer).matrix; }
}
_a = Lituus;
_Lituus_buffer = { value: { matrix: [[0, 0]] } };
