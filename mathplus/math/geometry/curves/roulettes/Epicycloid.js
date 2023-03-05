var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Epicycloid_buffer;
export default class Epicycloid {
    static x(angle, cRadius = 1, sRadius = 1) {
        if (cRadius !== __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).cRadius && sRadius !== __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).sRadius) {
            __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).cRadius = cRadius;
            __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).sRadius = sRadius;
            __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).radii = cRadius + sRadius;
        }
        return __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).radii * Math.cos(angle) - sRadius * Math.cos(__classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).radii * (1 / sRadius) * angle);
    }
    static y(angle, cRadius = 1, sRadius = 1) {
        if (cRadius !== __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).cRadius && sRadius !== __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).sRadius) {
            __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).cRadius = cRadius;
            __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).sRadius = sRadius;
            __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).radii = cRadius + sRadius;
        }
        return __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).radii * Math.sin(angle) - sRadius * Math.sin(__classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).radii * (1 / sRadius) * angle);
    }
    static generate(cRadius = 1, sRadius = 1, start = 0, length = Math.TAU, step = Math.TAU * .001) {
        __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).matrix = [];
        for (let i = start; i < start + length; i += step) {
            __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).matrix.push([this.x(i, cRadius, sRadius), this.y(i, cRadius, sRadius)]);
        }
        return __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).matrix;
    }
    static get last() { return __classPrivateFieldGet(this, _a, "f", _Epicycloid_buffer).matrix; }
}
_a = Epicycloid;
_Epicycloid_buffer = { value: {
        matrix: [[0, 0]],
        radii: 0,
        cRadius: 0,
        sRadius: 0
    } };
