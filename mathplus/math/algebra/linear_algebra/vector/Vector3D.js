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
import azimuth from "../../../../generic_calculations/azimuth.js";
import magnitude from "../../../../generic_calculations/magnitude.js";
import norm3d from "../../../../generic_calculations/norm3d.js";
import unit3d from "../../../../generic_calculations/unit3d.js";
import zenith from "../../../../generic_calculations/zenith.js";
import Dot3D from "../../../geometry/Dot3D.js";
import VectorCylindrical from "./VectorCylindrical.js";
import VectorSpherical from "./VectorSpherical.js";
let SQRT3_3 = Math.SQRT3 / 3;
class Vector3D {
    constructor(_b) {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var params = __rest(_b, []);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.dotProduct = {
            full: (vec3) => Vector3D.dotProduct.full(this, vec3),
            xy: (vec3) => Vector3D.dotProduct.xy(this, vec3),
            xz: (vec3) => Vector3D.dotProduct.xz(this, vec3),
            yz: (vec3) => Vector3D.dotProduct.yz(this, vec3)
        };
        this.dotProductCos = {
            full: (vec3) => Vector3D.dotProductCos.full(this, vec3),
            xy: (vec3) => Vector3D.dotProductCos.xy(this, vec3),
            xz: (vec3) => Vector3D.dotProductCos.xz(this, vec3),
            yz: (vec3) => Vector3D.dotProductCos.yz(this, vec3)
        };
        this.dotProductAcos = {
            full: (vec3) => Vector3D.dotProductAcos.full(this, vec3),
            xy: (vec3) => Vector3D.dotProductAcos.xy(this, vec3),
            xz: (vec3) => Vector3D.dotProductAcos.xz(this, vec3),
            yz: (vec3) => Vector3D.dotProductAcos.yz(this, vec3)
        };
        this.crossProduct = {
            full: (vec3) => Vector3D.crossProduct.full(this, vec3),
            x: (vec3) => Vector3D.crossProduct.x(this, vec3),
            y: (vec3) => Vector3D.crossProduct.y(this, vec3),
            z: (vec3) => Vector3D.crossProduct.z(this, vec3),
            _full: (vec3) => Vector3D.crossProduct.full(vec3, this),
            _x: (vec3) => Vector3D.crossProduct.x(vec3, this),
            _y: (vec3) => Vector3D.crossProduct.y(vec3, this),
            _z: (vec3) => Vector3D.crossProduct.z(vec3, this),
            xy: (vec3) => Vector3D.crossProduct.z(this, vec3),
            xz: (vec3) => Vector3D.crossProduct.y(this, vec3),
            yx: (vec3) => Vector3D.crossProduct.z(vec3, this),
            yz: (vec3) => Vector3D.crossProduct.x(this, vec3),
            zx: (vec3) => Vector3D.crossProduct.y(vec3, this),
            zy: (vec3) => Vector3D.crossProduct.z(vec3, this)
        };
        this.crossProductSin = {
            full: (vec3) => Vector3D.crossProductSin.full(this, vec3),
            x: (vec3) => Vector3D.crossProductSin.x(this, vec3),
            y: (vec3) => Vector3D.crossProductSin.y(this, vec3),
            z: (vec3) => Vector3D.crossProductSin.z(this, vec3),
            _full: (vec3) => Vector3D.crossProductSin.full(vec3, this),
            _x: (vec3) => Vector3D.crossProductSin.x(vec3, this),
            _y: (vec3) => Vector3D.crossProductSin.y(vec3, this),
            _z: (vec3) => Vector3D.crossProductSin.z(vec3, this),
            xy: (vec3) => Vector3D.crossProductSin.z(this, vec3),
            xz: (vec3) => Vector3D.crossProductSin.y(this, vec3),
            yx: (vec3) => Vector3D.crossProductSin.z(vec3, this),
            yz: (vec3) => Vector3D.crossProductSin.x(this, vec3),
            zx: (vec3) => Vector3D.crossProductSin.y(vec3, this),
            zy: (vec3) => Vector3D.crossProductSin.z(vec3, this)
        };
        this.crossProductAsin = {
            full: (vec3) => Vector3D.crossProductAsin.full(this, vec3),
            x: (vec3) => Vector3D.crossProductAsin.x(this, vec3),
            y: (vec3) => Vector3D.crossProductAsin.y(this, vec3),
            z: (vec3) => Vector3D.crossProductAsin.z(this, vec3),
            _full: (vec3) => Vector3D.crossProductAsin.full(vec3, this),
            _x: (vec3) => Vector3D.crossProductAsin.x(vec3, this),
            _y: (vec3) => Vector3D.crossProductAsin.y(vec3, this),
            _z: (vec3) => Vector3D.crossProductAsin.z(vec3, this),
            xy: (vec3) => Vector3D.crossProductAsin.z(this, vec3),
            xz: (vec3) => Vector3D.crossProductAsin.y(this, vec3),
            yx: (vec3) => Vector3D.crossProductAsin.z(vec3, this),
            yz: (vec3) => Vector3D.crossProductAsin.x(this, vec3),
            zx: (vec3) => Vector3D.crossProductAsin.y(vec3, this),
            zy: (vec3) => Vector3D.crossProductAsin.z(vec3, this)
        };
        this.x = (_e = (_d = (_c = params.x) !== null && _c !== void 0 ? _c : params[0][0]) !== null && _d !== void 0 ? _d : params[0]) !== null && _e !== void 0 ? _e : 0;
        this.y = (_j = (_h = (_g = (_f = params.y) !== null && _f !== void 0 ? _f : params[0][1]) !== null && _g !== void 0 ? _g : params[1][0]) !== null && _h !== void 0 ? _h : params[1]) !== null && _j !== void 0 ? _j : 0;
        this.z = (_o = (_m = (_l = (_k = params.z) !== null && _k !== void 0 ? _k : params[0][2]) !== null && _l !== void 0 ? _l : params[2][0]) !== null && _m !== void 0 ? _m : params[2]) !== null && _o !== void 0 ? _o : 0;
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
    add(x = 0, y = 0, z = 0) { this.x += x, this.y += y, this.z += z; }
    sub(x = 0, y = 0, z = 0) { this.add(-x, -y, -z); }
    mult(x = 1, y = 1, z = 1) { this.x *= x, this.y *= y, this.z *= z; }
    div(x = 1, y = 1, z = 1) { this.mult(1 / x, 1 / y, 1 / z); }
    get magnitude() { return magnitude(this.x, this.y, this.z); }
    get azimuth() { return azimuth(this.y, this.x); }
    get zenith() { return zenith(this.x, this.y, this.z); }
    rotate(azimuth = 0, zenith = 0) { Vector3D.rotate(this, azimuth, zenith); }
    get unit() { return unit3d(this); }
    get norm() { return norm3d(this); }
    get spherical() { return Vector3D.spherical(this); }
    get sphericalVector() { return Vector3D.sphericalVector(this); }
    get cylindrical() { return Vector3D.cylindrical(this); }
    get cylindricalVector() { return Vector3D.cylindricalVector(this); }
    get matrix() { return Vector3D.matrix(this); }
    get point() { return new Dot3D(this); }
    static add(vec3, x = 0, y = 0, z = 0) { vec3.x += x, vec3.y += y, vec3.z += z; }
    static sub(vec3, x = 0, y = 0, z = 0) { this.add(vec3, -x, -y, -z); }
    static mult(vec3, x = 1, y = 1, z = 1) { vec3.x *= x, vec3.y *= y, vec3.z *= z; }
    static div(vec3, x = 1, y = 1, z = 1) { this.mult(vec3, 1 / x, 1 / y, 1 / z); }
    static magnitude(vec3) { return magnitude(vec3.x, vec3.y, vec3.z); }
    static azimuth(vec3) { return azimuth(vec3.y, vec3.x); }
    static zenith(vec3) { return zenith(vec3.x, vec3.y, vec3.z); }
    static unit(vec3) { return unit3d(vec3); }
    static norm(vec3) { return norm3d(vec3); }
    static rotate(vec3, azimuth = 0, zenith = 0) {
        let mag = this.magnitude(vec3);
        azimuth += this.azimuth(vec3);
        zenith += this.zenith(vec3);
        vec3.x = mag * Math.sin(zenith) * Math.cos(azimuth);
        vec3.y = mag * Math.sin(zenith) * Math.sin(azimuth);
        vec3.z = mag * Math.cos(zenith);
    }
    static spherical(vec3) { return { azimuth: this.azimuth(vec3), zenith: this.zenith(vec3), radius: this.magnitude(vec3) }; }
    static sphericalVector(vec3) { return new VectorSpherical([this.azimuth(vec3), this.zenith(vec3), this.magnitude(vec3)]); }
    static cylindrical(vec3) { return { azimuth: this.azimuth(vec3), radius: this.magnitude(vec3), z: vec3.z }; }
    static cylindricalVector(vec3) { return new VectorCylindrical(this.cylindrical(vec3)); }
    static matrix(vec3) { return [[vec3.x, vec3.y, vec3.z]]; }
    static point(vec3) { return new Dot3D(vec3); }
}
_a = Vector3D;
Vector3D.dotProduct = {
    full(vec3_a, vec3_b) { return vec3_a.x * vec3_b.x + vec3_a.y * vec3_b.y + vec3_a.z * vec3_b.z; },
    xy(vec3_a, vec3_b) { return vec3_a.x * vec3_b.x + vec3_a.y * vec3_b.y; },
    xz(vec3_a, vec3_b) { return vec3_a.x * vec3_b.x + vec3_a.z * vec3_b.z; },
    yz(vec3_a, vec3_b) { return vec3_a.y * vec3_b.y + vec3_a.z * vec3_b.z; }
};
Vector3D.dotProductCos = {
    full(vec3_a, vec3_b) { return Vector3D.dotProduct.full(vec3_a, vec3_b) * (1 / (Vector3D.magnitude(vec3_a) * Vector3D.magnitude(vec3_b))); },
    xy(vec3_a, vec3_b) {
        return Vector3D.dotProduct.xy(vec3_a, vec3_b) * (1 / (magnitude(vec3_a.x, vec3_a.y) *
            magnitude(vec3_b.x, vec3_b.y)));
    },
    xz(vec3_a, vec3_b) {
        return Vector3D.dotProduct.xz(vec3_a, vec3_b) * (1 / (magnitude(vec3_a.x, vec3_a.z) *
            magnitude(vec3_b.x, vec3_b.z)));
    },
    yz(vec3_a, vec3_b) {
        return Vector3D.dotProduct.yz(vec3_a, vec3_b) * (1 / (magnitude(vec3_a.y, vec3_a.z) *
            magnitude(vec3_b.y, vec3_b.z)));
    }
};
Vector3D.dotProductAcos = {
    full(vec3_a, vec3_b) { return Math.acos(Vector3D.dotProductCos.full(vec3_a, vec3_b)); },
    xy(vec3_a, vec3_b) { return Math.acos(Vector3D.dotProductCos.xy(vec3_a, vec3_b)); },
    xz(vec3_a, vec3_b) { return Math.acos(Vector3D.dotProductCos.xz(vec3_a, vec3_b)); },
    yz(vec3_a, vec3_b) { return Math.acos(Vector3D.dotProductCos.yz(vec3_a, vec3_b)); }
};
Vector3D.crossProduct = {
    full(vec3_a, vec3_b) { return Vector3D.crossProduct.x(vec3_a, vec3_b) - Vector3D.crossProduct.y(vec3_a, vec3_b) + Vector3D.crossProduct.z(vec3_a, vec3_b); },
    _full(vec3_a, vec3_b) { return Vector3D.crossProduct.full(vec3_b, vec3_a); },
    x(vec3_a, vec3_b) { return vec3_a.y * vec3_b.z - vec3_a.z * vec3_b.y; },
    y(vec3_a, vec3_b) { return vec3_a.z * vec3_b.x - vec3_a.x * vec3_b.z; },
    z(vec3_a, vec3_b) { return vec3_a.x * vec3_b.y - vec3_a.y * vec3_b.x; },
    _x(vec3_a, vec3_b) { return Vector3D.crossProduct.x(vec3_b, vec3_a); },
    _y(vec3_a, vec3_b) { return Vector3D.crossProduct.y(vec3_b, vec3_a); },
    _z(vec3_a, vec3_b) { return Vector3D.crossProduct.z(vec3_b, vec3_a); },
    xy(vec3_a, vec3_b) { return Vector3D.crossProduct.z(vec3_a, vec3_b); },
    xz(vec3_a, vec3_b) { return Vector3D.crossProduct.y(vec3_a, vec3_b); },
    yx(vec3_a, vec3_b) { return Vector3D.crossProduct.z(vec3_b, vec3_a); },
    yz(vec3_a, vec3_b) { return Vector3D.crossProduct.x(vec3_a, vec3_b); },
    zx(vec3_a, vec3_b) { return Vector3D.crossProduct.y(vec3_b, vec3_a); },
    zy(vec3_a, vec3_b) { return Vector3D.crossProduct.x(vec3_b, vec3_a); }
};
Vector3D.crossProductSin = {
    full(vec3_a, vec3_b) { return Vector3D.crossProduct.full(vec3_a, vec3_b) * (1 / (Vector3D.magnitude(vec3_a) * Vector3D.magnitude(vec3_b))); },
    _full(vec3_a, vec3_b) { return Vector3D.crossProductSin.full(vec3_b, vec3_a); },
    x(vec3_a, vec3_b) { return Vector3D.crossProduct.x(vec3_a, vec3_b) * (1 / (magnitude(vec3_a.y, vec3_a.z) * magnitude(vec3_b.y, vec3_b.z))); },
    y(vec3_a, vec3_b) { return Vector3D.crossProduct.y(vec3_a, vec3_b) * (1 / (magnitude(vec3_a.x, vec3_a.z) * magnitude(vec3_b.x, vec3_b.z))); },
    z(vec3_a, vec3_b) { return Vector3D.crossProduct.z(vec3_a, vec3_b) * (1 / (magnitude(vec3_a.x, vec3_a.y) * magnitude(vec3_b.x, vec3_b.y))); },
    _x(vec3_a, vec3_b) { return Vector3D.crossProductSin.x(vec3_b, vec3_a); },
    _y(vec3_a, vec3_b) { return Vector3D.crossProductSin.y(vec3_b, vec3_a); },
    _z(vec3_a, vec3_b) { return Vector3D.crossProductSin.z(vec3_b, vec3_a); },
    xy(vec3_a, vec3_b) { return Vector3D.crossProductSin.z(vec3_a, vec3_b); },
    xz(vec3_a, vec3_b) { return Vector3D.crossProductSin.y(vec3_a, vec3_b); },
    yx(vec3_a, vec3_b) { return Vector3D.crossProductSin.z(vec3_b, vec3_a); },
    yz(vec3_a, vec3_b) { return Vector3D.crossProductSin.x(vec3_a, vec3_b); },
    zx(vec3_a, vec3_b) { return Vector3D.crossProductSin.y(vec3_b, vec3_a); },
    zy(vec3_a, vec3_b) { return Vector3D.crossProductSin.x(vec3_b, vec3_a); }
};
Vector3D.crossProductAsin = {
    full(vec3_a, vec3_b) { return Math.asin(Vector3D.crossProductSin.full(vec3_a, vec3_b)); },
    _full(vec3_a, vec3_b) { return Math.asin(Vector3D.crossProductAsin.full(vec3_b, vec3_a)); },
    x(vec3_a, vec3_b) { return Math.asin(Vector3D.crossProductSin.x(vec3_a, vec3_b)); },
    y(vec3_a, vec3_b) { return Math.asin(Vector3D.crossProductSin.y(vec3_a, vec3_b)); },
    z(vec3_a, vec3_b) { return Math.asin(Vector3D.crossProductSin.z(vec3_a, vec3_b)); },
    _x(vec3_a, vec3_b) { return Vector3D.crossProductAsin.x(vec3_b, vec3_a); },
    _y(vec3_a, vec3_b) { return Vector3D.crossProductAsin.y(vec3_b, vec3_a); },
    _z(vec3_a, vec3_b) { return Vector3D.crossProductAsin.z(vec3_b, vec3_a); },
    xy(vec3_a, vec3_b) { return Vector3D.crossProductAsin.z(vec3_a, vec3_b); },
    xz(vec3_a, vec3_b) { return Vector3D.crossProductAsin.y(vec3_a, vec3_b); },
    yx(vec3_a, vec3_b) { return Vector3D.crossProductAsin.z(vec3_b, vec3_a); },
    yz(vec3_a, vec3_b) { return Vector3D.crossProductAsin.x(vec3_a, vec3_b); },
    zx(vec3_a, vec3_b) { return Vector3D.crossProductAsin.y(vec3_b, vec3_a); },
    zy(vec3_a, vec3_b) { return Vector3D.crossProductAsin.x(vec3_b, vec3_a); }
};
Vector3D.ZERO = { x: 0, y: 0, z: 0 };
Vector3D.LEFT = { x: -1, y: 0, z: 0 };
Vector3D.RIGHT = { x: 1, y: 0, z: 0 };
Vector3D.DOWN = { x: 0, y: -1, z: 0 };
Vector3D.UP = { x: 0, y: 1, z: 0 };
Vector3D.BACK = { x: 0, y: 0, z: -1 };
Vector3D.FORWARD = { x: 0, y: 0, z: 1 };
Vector3D.FORWARD_DOWN = { x: 0, y: -Math.SQRT1_2, z: Math.SQRT1_2 };
Vector3D.FORWARD_LEFT = { x: -Math.SQRT1_2, y: 0, z: Math.SQRT1_2 };
Vector3D.FORWARD_RIGHT = { x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 };
Vector3D.FORWARD_UP = { x: 0, y: Math.SQRT1_2, z: Math.SQRT1_2 };
Vector3D.LEFT_BACK = { x: -Math.SQRT1_2, y: 0, z: -Math.SQRT1_2 };
Vector3D.LEFT_DOWN = { x: -Math.SQRT1_2, y: -Math.SQRT1_2, z: 0 };
Vector3D.LEFT_FORWARD = _a.FORWARD_LEFT;
Vector3D.LEFT_UP = { x: -Math.SQRT1_2, y: Math.SQRT1_2, z: 0 };
Vector3D.RIGHT_DOWN = { x: Math.SQRT1_2, y: -Math.SQRT1_2, z: 0 };
Vector3D.RIGHT_UP = { x: Math.SQRT1_2, y: Math.SQRT1_2, z: 0 };
Vector3D.RIGHT_BACK = { x: Math.SQRT1_2, y: 0, z: -Math.SQRT1_2 };
Vector3D.RIGHT_FORWARD = _a.FORWARD_RIGHT;
Vector3D.BACK_DOWN = { x: 0, y: -Math.SQRT1_2, z: -Math.SQRT1_2 };
Vector3D.BACK_LEFT = _a.LEFT_BACK;
Vector3D.BACK_RIGHT = _a.RIGHT_BACK;
Vector3D.BACK_UP = { x: 0, y: Math.SQRT1_2, z: -Math.SQRT1_2 };
Vector3D.UP_BACK = _a.BACK_UP;
Vector3D.UP_FORWARD = _a.FORWARD_UP;
Vector3D.UP_LEFT = _a.LEFT_UP;
Vector3D.UP_RIGHT = _a.RIGHT_UP;
Vector3D.DOWN_BACK = _a.BACK_DOWN;
Vector3D.DOWN_FORWARD = _a.FORWARD_DOWN;
Vector3D.DOWN_LEFT = _a.LEFT_DOWN;
Vector3D.DOWN_RIGHT = _a.RIGHT_DOWN;
Vector3D.LEFT_DOWN_BACK = { x: -SQRT3_3, y: -SQRT3_3, z: -SQRT3_3 };
Vector3D.LEFT_DOWN_FORWARD = { x: -SQRT3_3, y: -SQRT3_3, z: SQRT3_3 };
Vector3D.LEFT_UP_BACK = { x: -SQRT3_3, y: SQRT3_3, z: -SQRT3_3 };
Vector3D.LEFT_UP_FORWARD = { x: -SQRT3_3, y: SQRT3_3, z: SQRT3_3 };
Vector3D.LEFT_BACK_DOWN = _a.LEFT_DOWN_BACK;
Vector3D.LEFT_BACK_UP = _a.LEFT_UP_BACK;
Vector3D.LEFT_FORWARD_DOWN = _a.LEFT_DOWN_FORWARD;
Vector3D.LEFT_FORWARD_UP = _a.LEFT_UP_FORWARD;
Vector3D.RIGHT_DOWN_BACK = { x: SQRT3_3, y: -SQRT3_3, z: -SQRT3_3 };
Vector3D.RIGHT_DOWN_FORWARD = { x: SQRT3_3, y: -SQRT3_3, z: SQRT3_3 };
Vector3D.RIGHT_UP_BACK = { x: SQRT3_3, y: SQRT3_3, z: -SQRT3_3 };
Vector3D.RIGHT_UP_FORWARD = { x: SQRT3_3, y: SQRT3_3, z: SQRT3_3 };
Vector3D.RIGHT_BACK_DOWN = _a.RIGHT_DOWN_BACK;
Vector3D.RIGHT_BACK_UP = _a.RIGHT_UP_BACK;
Vector3D.RIGHT_FORWARD_DOWN = _a.RIGHT_DOWN_FORWARD;
Vector3D.RIGHT_FORWARD_UP = _a.RIGHT_UP_FORWARD;
Vector3D.DOWN_LEFT_BACK = _a.LEFT_DOWN_BACK;
Vector3D.DOWN_LEFT_FORWARD = _a.LEFT_DOWN_FORWARD;
Vector3D.DOWN_RIGHT_BACK = _a.RIGHT_DOWN_BACK;
Vector3D.DOWN_RIGHT_FORWARD = _a.RIGHT_DOWN_FORWARD;
Vector3D.DOWN_BACK_LEFT = _a.LEFT_DOWN_BACK;
Vector3D.DOWN_BACK_RIGHT = _a.RIGHT_DOWN_BACK;
Vector3D.DOWN_FORWARD_LEFT = _a.LEFT_DOWN_FORWARD;
Vector3D.DOWN_FORWARD_RIGHT = _a.RIGHT_DOWN_FORWARD;
Vector3D.UP_LEFT_BACK = _a.LEFT_UP_BACK;
Vector3D.UP_LEFT_FORWARD = _a.LEFT_UP_FORWARD;
Vector3D.UP_RIGHT_BACK = _a.RIGHT_UP_BACK;
Vector3D.UP_RIGHT_FORWARD = _a.RIGHT_UP_FORWARD;
Vector3D.UP_BACK_LEFT = _a.LEFT_UP_BACK;
Vector3D.UP_BACK_RIGHT = _a.RIGHT_UP_BACK;
Vector3D.UP_FORWARD_LEFT = _a.LEFT_UP_FORWARD;
Vector3D.UP_FORWARD_RIGHT = _a.RIGHT_UP_FORWARD;
Vector3D.FORWARD_LEFT_UP = _a.LEFT_UP_FORWARD;
Vector3D.FORWARD_LEFT_DOWN = _a.LEFT_DOWN_FORWARD;
Vector3D.FORWARD_RIGHT_UP = _a.RIGHT_UP_FORWARD;
Vector3D.FORWARD_RIGHT_DOWN = _a.RIGHT_DOWN_FORWARD;
Vector3D.FORWARD_DOWN_LEFT = _a.LEFT_DOWN_FORWARD;
Vector3D.FORWARD_DOWN_RIGHT = _a.RIGHT_DOWN_FORWARD;
Vector3D.FORWARD_UP_LEFT = _a.LEFT_UP_FORWARD;
Vector3D.FORWARD_UP_RIGHT = _a.RIGHT_UP_FORWARD;
Vector3D.BACK_LEFT_DOWN = _a.LEFT_DOWN_BACK;
Vector3D.BACK_LEFT_UP = _a.LEFT_UP_BACK;
Vector3D.BACK_RIGHT_DOWN = _a.RIGHT_DOWN_BACK;
Vector3D.BACK_RIGHT_UP = _a.RIGHT_UP_BACK;
Vector3D.BACK_DOWN_LEFT = _a.LEFT_DOWN_BACK;
Vector3D.BACK_DOWN_RIGHT = _a.RIGHT_DOWN_BACK;
Vector3D.BACK_UP_LEFT = _a.LEFT_UP_BACK;
Vector3D.BACK_UP_RIGHT = _a.RIGHT_UP_BACK;
Vector3D.zero = _a.matrix(_a.ZERO);
Vector3D.back = _a.matrix(_a.BACK);
Vector3D.down = _a.matrix(_a.DOWN);
Vector3D.forward = _a.matrix(_a.FORWARD);
Vector3D.left = _a.matrix(_a.LEFT);
Vector3D.right = _a.matrix(_a.RIGHT);
Vector3D.up = _a.matrix(_a.UP);
Vector3D.forward_down = _a.matrix(_a.FORWARD_DOWN);
Vector3D.forward_left = _a.matrix(_a.FORWARD_LEFT);
Vector3D.forward_right = _a.matrix(_a.FORWARD_RIGHT);
Vector3D.forward_up = _a.matrix(_a.FORWARD_UP);
Vector3D.left_back = _a.matrix(_a.LEFT_BACK);
Vector3D.left_down = _a.matrix(_a.LEFT_DOWN);
Vector3D.left_forward = _a.forward_left;
Vector3D.left_up = _a.matrix(_a.LEFT_UP);
Vector3D.right_down = _a.matrix(_a.RIGHT_DOWN);
Vector3D.right_up = _a.matrix(_a.RIGHT_UP);
Vector3D.right_back = _a.matrix(_a.RIGHT_BACK);
Vector3D.right_forward = _a.forward_right;
Vector3D.back_down = _a.matrix(_a.BACK_DOWN);
Vector3D.back_left = _a.left_back;
Vector3D.back_right = _a.right_back;
Vector3D.back_up = _a.matrix(_a.BACK_UP);
Vector3D.up_back = _a.back_up;
Vector3D.up_forward = _a.forward_up;
Vector3D.up_left = _a.left_up;
Vector3D.up_right = _a.right_up;
Vector3D.down_back = _a.back_down;
Vector3D.down_forward = _a.forward_down;
Vector3D.down_left = _a.left_down;
Vector3D.down_right = _a.right_down;
Vector3D.left_down_back = _a.matrix(_a.LEFT_DOWN_BACK);
Vector3D.left_down_forward = _a.matrix(_a.LEFT_DOWN_FORWARD);
Vector3D.left_up_back = _a.matrix(_a.LEFT_UP_BACK);
Vector3D.left_up_forward = _a.matrix(_a.LEFT_UP_FORWARD);
Vector3D.left_back_down = _a.left_down_back;
Vector3D.left_back_up = _a.left_up_back;
Vector3D.left_forward_down = _a.left_down_forward;
Vector3D.left_forward_up = _a.left_up_forward;
Vector3D.right_down_back = _a.matrix(_a.RIGHT_DOWN_BACK);
Vector3D.right_down_forward = _a.matrix(_a.RIGHT_DOWN_FORWARD);
Vector3D.right_up_back = _a.matrix(_a.RIGHT_UP_BACK);
Vector3D.right_up_forward = _a.matrix(_a.RIGHT_UP_FORWARD);
Vector3D.right_back_down = _a.right_down_back;
Vector3D.right_back_up = _a.right_up_back;
Vector3D.right_forward_down = _a.right_down_forward;
Vector3D.right_forward_up = _a.right_up_forward;
Vector3D.down_left_back = _a.left_down_back;
Vector3D.down_left_forward = _a.left_down_forward;
Vector3D.down_right_back = _a.right_down_back;
Vector3D.down_right_forward = _a.right_down_forward;
Vector3D.down_back_left = _a.left_down_back;
Vector3D.down_back_right = _a.right_down_back;
Vector3D.down_forward_left = _a.left_down_forward;
Vector3D.down_forward_right = _a.right_down_forward;
Vector3D.up_left_back = _a.left_up_back;
Vector3D.up_left_forward = _a.left_up_forward;
Vector3D.up_right_back = _a.right_up_back;
Vector3D.up_right_forward = _a.right_up_forward;
Vector3D.up_back_left = _a.left_up_back;
Vector3D.up_back_right = _a.right_up_back;
Vector3D.up_forward_left = _a.left_up_forward;
Vector3D.up_forward_right = _a.right_up_forward;
Vector3D.forward_left_down = _a.left_down_forward;
Vector3D.forward_left_up = _a.left_up_forward;
Vector3D.forward_right_down = _a.right_down_forward;
Vector3D.forward_right_up = _a.right_up_forward;
Vector3D.forward_down_left = _a.left_down_forward;
Vector3D.forward_down_right = _a.right_down_forward;
Vector3D.forward_up_left = _a.left_up_forward;
Vector3D.forward_up_right = _a.right_up_forward;
Vector3D.back_left_down = _a.left_down_back;
Vector3D.back_left_up = _a.left_up_back;
Vector3D.back_right_down = _a.right_down_back;
Vector3D.back_right_up = _a.right_up_back;
Vector3D.back_down_left = _a.left_down_back;
Vector3D.back_down_right = _a.right_down_back;
Vector3D.back_up_left = _a.left_up_back;
Vector3D.back_up_right = _a.right_up_back;
export default Vector3D;
