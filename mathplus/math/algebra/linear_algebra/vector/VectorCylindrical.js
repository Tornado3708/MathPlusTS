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
import Vector3D from "./Vector3D.js";
import VectorSpherical from "./VectorSpherical.js";
let toArray = ({ azimuth = 0, radius = 0, z = 0 }) => { return [azimuth, radius, z]; };
class VectorCylindrical {
    constructor(_b) {
        var _c, _d, _e, _f, _g, _h;
        var params = __rest(_b, []);
        this.azimuth = 0;
        this.radius = 0;
        this.z = 0;
        this.azimuth = (_d = (_c = params.azimuth) !== null && _c !== void 0 ? _c : params[0]) !== null && _d !== void 0 ? _d : 0;
        this.radius = (_f = (_e = params.radius) !== null && _e !== void 0 ? _e : params[1]) !== null && _f !== void 0 ? _f : 0;
        this.z = (_h = (_g = params.z) !== null && _g !== void 0 ? _g : params[2]) !== null && _h !== void 0 ? _h : 0;
        if (!isFinite(this.azimuth)) {
            this.azimuth = 0;
        }
        else if (Math.abs(this.azimuth) > Math.TAU) {
            this.azimuth %= Math.TAU;
        }
        if (!isFinite(this.radius)) {
            this.radius = 0;
        }
        if (!isFinite(this.z)) {
            this.z = 0;
        }
    }
    static cartesian({ azimuth = 0, radius = 0, z = 0 }) { return { x: Math.cos(azimuth) * radius, y: Math.sin(azimuth) * radius, z: z }; }
    static cartesianVector({ azimuth = 0, radius = 0, z = 0 }) { return new Vector3D(this.cartesian({ azimuth, radius, z })); }
    static spherical({ azimuth = 0, radius = 0, z = 0 }) {
        let new_radius = Math.hypot(radius, z);
        return {
            azimuth: azimuth,
            zenith: Math.acos(z * (1 / new_radius)),
            radius: new_radius
        };
    }
    static sphericalVector({ azimuth = 0, radius = 0, z = 0 }) { return new VectorSpherical(this.spherical({ azimuth, radius, z })); }
}
_a = VectorCylindrical;
VectorCylindrical.ZERO = { azimuth: 0, radius: 0, z: 0 };
VectorCylindrical.zero = toArray(_a.ZERO);
export default VectorCylindrical;
