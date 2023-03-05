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
import { const_cylindrical, cyl2Array } from "../../../constants.js";
export default class VectorCylindrical {
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
VectorCylindrical.ZERO = const_cylindrical.ZERO;
VectorCylindrical.BACK = const_cylindrical.BACK;
VectorCylindrical.DOWN = const_cylindrical.DOWN;
VectorCylindrical.FORWARD = const_cylindrical.FORWARD;
VectorCylindrical.LEFT = const_cylindrical.LEFT;
VectorCylindrical.RIGHT = const_cylindrical.RIGHT;
VectorCylindrical.UP = const_cylindrical.UP;
VectorCylindrical.LEFT_BACK = const_cylindrical.LEFT_BACK;
VectorCylindrical.LEFT_DOWN = const_cylindrical.LEFT_DOWN;
VectorCylindrical.LEFT_FORWARD = const_cylindrical.LEFT_FORWARD;
VectorCylindrical.LEFT_UP = const_cylindrical.LEFT_UP;
VectorCylindrical.RIGHT_BACK = const_cylindrical.RIGHT_BACK;
VectorCylindrical.RIGHT_DOWN = const_cylindrical.RIGHT_DOWN;
VectorCylindrical.RIGHT_FORWARD = const_cylindrical.RIGHT_FORWARD;
VectorCylindrical.RIGHT_UP = const_cylindrical.RIGHT_UP;
VectorCylindrical.DOWN_BACK = const_cylindrical.DOWN_BACK;
VectorCylindrical.DOWN_FORWARD = const_cylindrical.DOWN_FORWARD;
VectorCylindrical.DOWN_LEFT = _a.LEFT_DOWN;
VectorCylindrical.DOWN_RIGHT = _a.RIGHT_DOWN;
VectorCylindrical.UP_BACK = const_cylindrical.UP_BACK;
VectorCylindrical.UP_FORWARD = const_cylindrical.UP_FORWARD;
VectorCylindrical.UP_LEFT = _a.LEFT_UP;
VectorCylindrical.UP_RIGHT = _a.RIGHT_UP;
VectorCylindrical.FORWARD_DOWN = _a.DOWN_FORWARD;
VectorCylindrical.FORWARD_LEFT = _a.LEFT_FORWARD;
VectorCylindrical.FORWARD_RIGHT = _a.RIGHT_FORWARD;
VectorCylindrical.FORWARD_UP = _a.UP_FORWARD;
VectorCylindrical.BACK_DOWN = _a.DOWN_BACK;
VectorCylindrical.BACK_LEFT = _a.LEFT_BACK;
VectorCylindrical.BACK_RIGHT = _a.RIGHT_BACK;
VectorCylindrical.BACK_UP = _a.UP_BACK;
VectorCylindrical.zero = cyl2Array(_a.ZERO);
VectorCylindrical.back = cyl2Array(_a.BACK);
VectorCylindrical.down = cyl2Array(_a.DOWN);
VectorCylindrical.forward = cyl2Array(_a.FORWARD);
VectorCylindrical.left = cyl2Array(_a.LEFT);
VectorCylindrical.right = cyl2Array(_a.RIGHT);
VectorCylindrical.up = cyl2Array(_a.UP);
VectorCylindrical.left_back = cyl2Array(_a.LEFT_BACK);
VectorCylindrical.left_down = cyl2Array(_a.LEFT_DOWN);
VectorCylindrical.left_forward = cyl2Array(_a.LEFT_FORWARD);
VectorCylindrical.left_up = cyl2Array(_a.LEFT_UP);
VectorCylindrical.right_back = cyl2Array(_a.RIGHT_BACK);
VectorCylindrical.right_down = cyl2Array(_a.RIGHT_DOWN);
VectorCylindrical.right_forward = cyl2Array(_a.RIGHT_FORWARD);
VectorCylindrical.right_up = cyl2Array(_a.RIGHT_UP);
VectorCylindrical.down_back = cyl2Array(_a.DOWN_BACK);
VectorCylindrical.down_forward = cyl2Array(_a.DOWN_FORWARD);
VectorCylindrical.down_left = _a.left_down;
VectorCylindrical.down_right = _a.right_down;
VectorCylindrical.up_back = cyl2Array(_a.UP_BACK);
VectorCylindrical.up_forward = cyl2Array(_a.UP_FORWARD);
VectorCylindrical.up_left = _a.left_up;
VectorCylindrical.up_right = _a.right_up;
VectorCylindrical.forward_down = _a.down_forward;
VectorCylindrical.forward_left = _a.left_forward;
VectorCylindrical.forward_right = _a.right_forward;
VectorCylindrical.forward_up = _a.up_forward;
VectorCylindrical.back_down = _a.down_back;
VectorCylindrical.back_left = _a.left_back;
VectorCylindrical.back_right = _a.right_back;
VectorCylindrical.back_up = _a.up_back;
