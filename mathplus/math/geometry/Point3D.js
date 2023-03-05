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
import Vector3D from "../algebra/linear_algebra/vector/Vector3D.js";
import { const3d_zero } from "../constants.js";
export default class Point3D {
    constructor(_a) {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var params = __rest(_a, []);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vector = (start = Vector3D.ZERO) => Point3D.vector(this, start);
        this.x = (_d = (_c = (_b = params.x) !== null && _b !== void 0 ? _b : params[0][0]) !== null && _c !== void 0 ? _c : params[0]) !== null && _d !== void 0 ? _d : 0;
        this.y = (_h = (_g = (_f = (_e = params.y) !== null && _e !== void 0 ? _e : params[0][1]) !== null && _f !== void 0 ? _f : params[1][0]) !== null && _g !== void 0 ? _g : params[1]) !== null && _h !== void 0 ? _h : 0;
        this.z = (_m = (_l = (_k = (_j = params.z) !== null && _j !== void 0 ? _j : params[0][2]) !== null && _k !== void 0 ? _k : params[2][0]) !== null && _l !== void 0 ? _l : params[2]) !== null && _m !== void 0 ? _m : 0;
        if (!isFinite(this.x)) {
            this.x = 0;
        }
        if (!isFinite(this.y)) {
            this.y = 0;
        }
        if (!isFinite(this.z)) {
            this.z = 0;
        }
    }
    distance(p2) { return Point3D.distance(this, p2); }
    static distance({ x: x1 = 0, y: y1 = 0, z: z1 = 0 }, { x: x2 = 0, y: y2 = 0, z: z2 = 0 }) { return Math.hypot(x1 - x2, y1 - y2, z1 - z2); }
    static vector({ x = 0, y = 0, z = 0 }, { x: x0, y: y0, z: z0 } = Point3D.ZERO) { return new Vector3D([x - x0, y - y0, z - z0]); }
}
Point3D.ZERO = const3d_zero;
Point3D.zero = [0, 0, 0];
