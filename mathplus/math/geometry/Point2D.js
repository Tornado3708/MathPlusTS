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
import Vector2D from "../algebra/linear_algebra/vector/Vector2D.js";
import { const2d_zero } from "../constants.js";
export default class Point2D {
    constructor(_a) {
        var _b, _c, _d, _e, _f, _g, _h;
        var params = __rest(_a, []);
        this.x = 0;
        this.y = 0;
        this.x = (_d = (_c = (_b = params.x) !== null && _b !== void 0 ? _b : params[0][0]) !== null && _c !== void 0 ? _c : params[0]) !== null && _d !== void 0 ? _d : 0;
        this.y = (_h = (_g = (_f = (_e = params.y) !== null && _e !== void 0 ? _e : params[0][1]) !== null && _f !== void 0 ? _f : params[1][0]) !== null && _g !== void 0 ? _g : params[1]) !== null && _h !== void 0 ? _h : 0;
    }
    static distance(_a = { x: 0, y: 0 }, _b) { var dot_a = __rest(_a, []); var _c = _b === void 0 ? { x: 0, y: 0 } : _b, dot_b = __rest(_c, []); return Math.hypot(dot_a.x - dot_b.x, dot_a.y - dot_b.y); }
    static distances(_a = { x: 0, y: 0 }, _b) {
        var dot_a = __rest(_a, []);
        var _c = _b === void 0 ? { x: 0, y: 0 } : _b, dot_b = __rest(_c, []);
        return {
            x: dot_a.x - dot_b.x,
            y: dot_a.y - dot_b.y
        };
    }
    static vector(_a, _b) { var dot = __rest(_a, []); var _c = _b === void 0 ? { x: 0, y: 0 } : _b, start = __rest(_c, []); return new Vector2D([dot.x - start.x, dot.y - start.y]); }
}
Point2D.ZERO = const2d_zero;
Point2D.zero = [0, 0];
