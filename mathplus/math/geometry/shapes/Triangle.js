var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _Triangle_modes, _Triangle_mode;
export default class Triangle extends Array {
    constructor(_b) {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var points = __rest(_b, []);
        super();
        if (Triangle.mode === `group`) {
            points[0] = [
                (_e = (_d = (_c = points[0].x) !== null && _c !== void 0 ? _c : points[0][0]) !== null && _d !== void 0 ? _d : points[0]) !== null && _e !== void 0 ? _e : 0,
                (_h = (_g = (_f = points[1].x) !== null && _f !== void 0 ? _f : points[0][1]) !== null && _g !== void 0 ? _g : points[1]) !== null && _h !== void 0 ? _h : 0,
                (_l = (_k = (_j = points[2].x) !== null && _j !== void 0 ? _j : points[0][2]) !== null && _k !== void 0 ? _k : points[2]) !== null && _l !== void 0 ? _l : 0
            ];
            points[1] = [];
        }
        else if (Triangle.mode === `whole`) {
            for (let i = 0; i < 3; i++) {
                this[i] = [
                    (_p = (_o = (_m = points[i].x) !== null && _m !== void 0 ? _m : points[i][0]) !== null && _o !== void 0 ? _o : points[i * 3]) !== null && _p !== void 0 ? _p : 0,
                    (_s = (_r = (_q = points[i].y) !== null && _q !== void 0 ? _q : points[i][1]) !== null && _r !== void 0 ? _r : points[i * 3 + 1]) !== null && _s !== void 0 ? _s : 0,
                    (_v = (_u = (_t = points[i].z) !== null && _t !== void 0 ? _t : points[i][2]) !== null && _u !== void 0 ? _u : points[i * 3 + 2]) !== null && _v !== void 0 ? _v : 0
                ];
            }
        }
    }
    static get mode() { return __classPrivateFieldGet(this, _a, "f", _Triangle_mode); }
    static set mode(string) {
        if (__classPrivateFieldGet(this, _a, "f", _Triangle_modes).indexOf(string) >= 0) {
            __classPrivateFieldSet(this, _a, string, "f", _Triangle_mode);
        }
        else {
            __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Triangle_modes)[0], "f", _Triangle_mode);
        }
    }
}
_a = Triangle;
_Triangle_modes = { value: [`group`, `whole`] };
_Triangle_mode = { value: 'group' };
