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
var _a;
import Vector2D from "./Vector2D.js";
import { simple2D } from "../../../../simplify.js";
function toArray(obj) { return [obj.azimuth, obj.radius]; }
class VectorPolar {
    constructor(_b) {
        var _c, _d, _e, _f;
        var params = __rest(_b, []);
        this.azimuth = 0;
        this.radius = 0;
        this.azimuth = (_d = (_c = params.azimuth) !== null && _c !== void 0 ? _c : params[0]) !== null && _d !== void 0 ? _d : 0;
        this.radius = (_f = (_e = params.radius) !== null && _e !== void 0 ? _e : params[1]) !== null && _f !== void 0 ? _f : 0;
        if (!isFinite(this.azimuth)) {
            this.azimuth = 0;
        }
        else if (Math.abs(this.azimuth) > Math.TAU) {
            this.azimuth %= Math.TAU;
        }
        if (!isFinite(this.radius)) {
            this.radius = 0;
        }
    }
    rotate(azimuth = 0) { VectorPolar.rotate(this, azimuth); }
    radiusAdd(add = 0) { VectorPolar.radiusAdd(this, add); }
    radiusSub(sub = 0) { VectorPolar.radiusAdd(this, -sub); }
    radiusMult(m = 1) { VectorPolar.radiusMult(this, m); }
    radiusDiv(d = 1) { VectorPolar.radiusMult(this, 1 / d); }
    get cartesian() { return VectorPolar.cartesian(this); }
    get cartesianVector() { return VectorPolar.cartesianVector(this); }
    static rotate(polar, azimuth = 0) {
        if (isFinite(azimuth))
            polar.azimuth += azimuth;
        if (Math.abs(polar.azimuth) > Math.TAU)
            polar.azimuth %= Math.TAU;
    }
    static radiusAdd(polar, add = 0) { polar.radius += add; }
    static radiusSub(polar, sub = 0) { polar.radius -= sub; }
    static radiusMult(polar, m = 1) { polar.radius *= m; }
    static radiusDiv(polar, d = 1) { this.radiusMult(polar, 1 / d); }
    static cartesian({ azimuth = 0, radius = 0 }) { return simple2D(Math.cos(azimuth) * radius, Math.sin(azimuth) * radius); }
    static cartesianVector(polar) { return new Vector2D(this.cartesian(polar)); }
}
_a = VectorPolar;
VectorPolar.ZERO = { azimuth: 0, radius: 0 };
VectorPolar.DOWN = { azimuth: -Math.PI * .5, radius: 1 };
VectorPolar.LEFT = { azimuth: Math.PI, radius: 1 };
VectorPolar.RIGHT = { azimuth: 0, radius: 1 };
VectorPolar.UP = { azimuth: Math.PI * .5, radius: 1 };
VectorPolar.LEFT_UP = { azimuth: Math.PI * .75, radius: 1 };
VectorPolar.LEFT_DONW = { azimuth: -_a.LEFT_UP.azimuth, radius: 1 };
VectorPolar.RIGHT_UP = { azimuth: Math.PI * .25, radius: 1 };
VectorPolar.RIGHT_DOWN = { azimuth: -_a.RIGHT_UP.azimuth, radius: 1 };
VectorPolar.UP_LEFT = _a.LEFT_UP;
VectorPolar.UP_RIGHT = _a.RIGHT_UP;
VectorPolar.DOWN_LEFT = _a.LEFT_DONW;
VectorPolar.DOWN_RIGHT = _a.RIGHT_DOWN;
VectorPolar.zero = [0, 0];
VectorPolar.down = toArray(_a.DOWN);
VectorPolar.left = toArray(_a.LEFT);
VectorPolar.right = toArray(_a.RIGHT);
VectorPolar.up = toArray(_a.UP);
VectorPolar.left_up = toArray(_a.LEFT_UP);
VectorPolar.left_down = toArray(_a.LEFT_DONW);
VectorPolar.right_up = toArray(_a.RIGHT_UP);
VectorPolar.right_down = toArray(_a.RIGHT_DOWN);
VectorPolar.up_left = _a.left_up;
VectorPolar.up_right = _a.right_up;
VectorPolar.down_left = _a.left_down;
VectorPolar.down_right = _a.right_down;
export default VectorPolar;
