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
import VectorCylindrical from "./VectorCylindrical.js";
import Vector3D from "./Vector3D.js";
import { const_spherical } from "../../../constants.js";
const toArray = ({ azimuth, zenith, radius }) => { return [azimuth, zenith, radius]; };
export default class VectorSpherical {
    constructor(_a) {
        var _b, _c, _d, _e, _f, _g;
        var params = __rest(_a, []);
        this.radius = 0;
        this.azimuth = 0;
        this.zenith = 0;
        this.azimuth = (_c = (_b = params.azimuth) !== null && _b !== void 0 ? _b : params[0]) !== null && _c !== void 0 ? _c : 0;
        this.zenith = (_e = (_d = params.zenith) !== null && _d !== void 0 ? _d : params[1]) !== null && _e !== void 0 ? _e : 0;
        this.radius = (_g = (_f = params.radius) !== null && _f !== void 0 ? _f : params[2]) !== null && _g !== void 0 ? _g : 0;
        if (!isFinite(this.azimuth)) {
            this.azimuth = 0;
        }
        else if (Math.abs(this.azimuth) > Math.TAU) {
            this.azimuth %= Math.TAU;
        }
        if (!isFinite(this.zenith)) {
            this.azimuth = 0;
        }
        else if (this.zenith > Math.PI) {
            this.zenith = Math.PI;
        }
        else if (this.zenith < 0) {
            this.zenith = 0;
        }
    }
    add(azimuth = 0, zenith = 0, radius = 0) {
        this.azimuth += azimuth;
        this.zenith += zenith;
        this.radius += radius;
        if (Math.abs(this.azimuth) > Math.TAU) {
            this.azimuth %= Math.TAU;
        }
        if (this.zenith > Math.PI || this.zenith < 0) {
            this.azimuth = -this.azimuth;
            this.zenith = (this.zenith + Math.PI) % Math.PI;
        }
    }
    sub(azimuth = 0, zenith = 0, radius = 0) {
        let PI = Math.PI;
        let TAU = Math.TAU || PI * 2;
        this.azimuth -= azimuth;
        this.zenith -= zenith;
        this.radius -= radius;
        if (Math.abs(this.azimuth) > TAU) {
            this.azimuth %= TAU;
        }
        if (this.zenith > PI || this.zenith < 0) {
            this.azimuth = -this.azimuth;
            this.zenith = (this.zenith + PI) % PI;
        }
    }
    mult(azimuth = 1, zenith = 1, radius = 1) {
        let PI = Math.PI;
        let TAU = Math.TAU || PI * 2;
        this.azimuth *= azimuth;
        this.zenith *= zenith;
        this.radius *= radius;
        if (Math.abs(this.azimuth) > TAU) {
            this.azimuth %= TAU;
        }
        if (this.zenith > PI || this.zenith < 0) {
            this.azimuth = -this.azimuth;
            this.zenith = (this.zenith + PI) % PI;
        }
    }
    div(azimuth = 1, zenith = 1, radius = 1) {
        let PI = Math.PI;
        let TAU = Math.TAU || PI * 2;
        this.azimuth *= 1 / azimuth;
        this.zenith *= 1 / zenith;
        this.radius *= 1 / radius;
        if (Math.abs(this.azimuth) > TAU) {
            this.azimuth %= TAU;
        }
        if (this.zenith > PI || this.zenith < 0) {
            this.azimuth = -this.azimuth;
            this.zenith = (this.zenith + PI) % PI;
        }
    }
    rotate(azimuth = 0, zenith = 0) {
        let PI = Math.PI;
        let TAU = Math.TAU || Math.PI * 2;
        this.azimuth += azimuth;
        this.zenith += zenith;
        if (Math.abs(this.azimuth) > TAU) {
            this.azimuth %= TAU;
        }
        if (this.zenith > PI || this.zenith < 0) {
            this.azimuth = -this.azimuth;
            this.zenith = (this.zenith + PI) % PI;
        }
    }
    extend(radius = 0) { this.radius += radius; }
    get toArray() { return [this.azimuth, this.zenith, this.radius]; }
    get toVector() {
        let azimuth = this.azimuth;
        let zenith = this.zenith;
        let radius = this.radius;
        return new Vector3D([
            radius * Math.sin(zenith) * Math.cos(azimuth),
            radius * Math.sin(zenith) * Math.sin(azimuth),
            radius * Math.cos(zenith)
        ]);
    }
    get toCartesian() {
        let azimuth = this.azimuth;
        let zenith = this.zenith;
        let radius = this.radius;
        return {
            x: radius * Math.sin(zenith) * Math.cos(azimuth),
            y: radius * Math.sin(zenith) * Math.sin(azimuth),
            z: radius * Math.cos(zenith)
        };
    }
    get toCylinder() {
        let zenith = this.zenith;
        let radius = this.radius;
        return new VectorCylindrical([
            this.azimuth,
            radius * Math.cos(zenith),
            radius * Math.sin(zenith)
        ]);
    }
    get toCylindrical() {
        return {
            azimuth: this.azimuth,
            radius: this.radius * Math.cos(this.zenith),
            z: this.radius * Math.sin(this.zenith)
        };
    }
}
VectorSpherical.ZERO = const_spherical.ZERO;
VectorSpherical.DOWN = const_spherical.DOWN;
VectorSpherical.FORWARD = { azimuth: 0, zenith: 0, radius: 1 };
VectorSpherical.LEFT = { azimuth: Math.PI, zenith: Math.PI * 0.5, radius: 1 };
VectorSpherical.RIGHT = { azimuth: 0, zenith: Math.PI * 0.5, radius: 1 };
VectorSpherical.UP = { azimuth: Math.PI * 0.5, zenith: Math.PI * 0.5, radius: 1 };
VectorSpherical.zero = [0, 0, 0];
VectorSpherical.down = [-Math.PI_HALF || -Math.PI * 0.5, Math.PI_HALF || Math.PI * 0.5, 1];
VectorSpherical.forward = [0, 0, 1];
VectorSpherical.left = [Math.PI, Math.PI_HALF || Math.PI * 0.5, 1];
VectorSpherical.right = [0, Math.PI_HALF || Math.PI * 0.5, 1];
VectorSpherical.up = [Math.PI_HALF || Math.PI * 0.5, Math.PI_HALF || Math.PI * 0.5, 1];
