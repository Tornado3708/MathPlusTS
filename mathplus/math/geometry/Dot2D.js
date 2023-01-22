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
class Dot2D {
    constructor(_a) {
        var _b, _c, _d, _e;
        var params = __rest(_a, []);
        this.x = 0;
        this.y = 0;
        this.x = (_c = (_b = params.x) !== null && _b !== void 0 ? _b : params[0]) !== null && _c !== void 0 ? _c : 0;
        this.y = (_e = (_d = params.y) !== null && _d !== void 0 ? _d : params[1]) !== null && _e !== void 0 ? _e : 0;
    }
    static distance(_a = { x: 0, y: 0 }, _b) { var dot_a = __rest(_a, []); var _c = _b === void 0 ? { x: 0, y: 0 } : _b, dot_b = __rest(_c, []); return Math.hypot(dot_a.x - dot_b.x, dot_a.y - dot_b.y); }
    static vector(_a, _b) { var dot = __rest(_a, []); var _c = _b === void 0 ? { x: 0, y: 0 } : _b, start = __rest(_c, []); return new Vector2D([dot.x - start.x, dot.y - start.y]); }
}
export default Dot2D;
