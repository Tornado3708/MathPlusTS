var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Cyclogon_abs, _Cyclogon_chord, _Cyclogon_cycle, _Cyclogon_dir, _Cyclogon_end, _Cyclogon_fullX, _Cyclogon_fullY, _Cyclogon_length, _Cyclogon_loop, _Cyclogon_polygon, _Cyclogon_result, _Cyclogon_start, _Cyclogon_segmentX, _Cyclogon_segmentY, _Cyclogon_values, _Cyclogon_diff, _Cyclogon_chords, _Cyclogon_angle0, _Cyclogon_absolute, _Cyclogon_value, _Cyclogon_begin, _Cyclogon_segmentationX, _Cyclogon_segmentationY, _Cyclogon_init, _Cyclogon_reset;
import azimuth from "../../../../generic_calculations/azimuth.js";
import magnitude from "../../../../generic_calculations/magnitude.js";
import Point2D from "../../Point2D.js";
export default class Cyclogon {
    static x(angle, polygon) {
        if (angle === 0)
            return 0;
        __classPrivateFieldGet(this, _a, "m", _Cyclogon_reset).call(this, polygon, angle);
        if (__classPrivateFieldGet(this, _a, "f", _Cyclogon_dir) === -1) {
            __classPrivateFieldGet(this, _a, "f", _Cyclogon_polygon).reverse(), angle = Math.abs(angle);
        }
        __classPrivateFieldGet(this, _a, "m", _Cyclogon_init).call(this, __classPrivateFieldGet(this, _a, "f", _Cyclogon_polygon));
        __classPrivateFieldGet(this, _a, "m", _Cyclogon_segmentationX).call(this);
        if (angle > __classPrivateFieldGet(this, _a, "f", _Cyclogon_cycle)) {
            __classPrivateFieldSet(this, _a, (__classPrivateFieldGet(this, _a, "f", _Cyclogon_cycle) / (angle - (angle % __classPrivateFieldGet(this, _a, "f", _Cyclogon_cycle)))) || 0, "f", _Cyclogon_loop);
            if (!isFinite(__classPrivateFieldGet(this, _a, "f", _Cyclogon_loop))) {
                __classPrivateFieldSet(this, _a, 0, "f", _Cyclogon_loop);
            }
            angle -= __classPrivateFieldGet(this, _a, "f", _Cyclogon_cycle) * __classPrivateFieldGet(this, _a, "f", _Cyclogon_loop);
        }
        for (let i = 0; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length); i++) {
            if (angle > 0) {
                if (angle >= __classPrivateFieldGet(this, _a, "f", _Cyclogon_values)[i]) {
                    __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Cyclogon_result) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_segmentX)[i], "f", _Cyclogon_result), angle -= __classPrivateFieldGet(this, _a, "f", _Cyclogon_values)[i];
                }
                else {
                    __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Cyclogon_result) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_diff).x(__classPrivateFieldGet(this, _a, "f", _Cyclogon_start)[i] + angle, __classPrivateFieldGet(this, _a, "f", _Cyclogon_start)[i], __classPrivateFieldGet(this, _a, "f", _Cyclogon_chord)[i]), "f", _Cyclogon_result);
                    return __classPrivateFieldGet(this, _a, "f", _Cyclogon_dir) * (__classPrivateFieldGet(this, _a, "f", _Cyclogon_result) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_loop) * __classPrivateFieldGet(this, _a, "f", _Cyclogon_fullX));
                }
            }
            else {
                break;
            }
        }
        return __classPrivateFieldGet(this, _a, "f", _Cyclogon_dir) * (__classPrivateFieldGet(this, _a, "f", _Cyclogon_result) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_loop) * __classPrivateFieldGet(this, _a, "f", _Cyclogon_fullX));
    }
    static y(angle, polygon) {
        if (angle === 0)
            return 0;
        __classPrivateFieldGet(this, _a, "m", _Cyclogon_reset).call(this, polygon, angle);
        if (__classPrivateFieldGet(this, _a, "f", _Cyclogon_dir) === -1) {
            __classPrivateFieldGet(this, _a, "f", _Cyclogon_polygon).reverse(), angle *= -1;
        }
        __classPrivateFieldGet(this, _a, "m", _Cyclogon_init).call(this, __classPrivateFieldGet(this, _a, "f", _Cyclogon_polygon)), __classPrivateFieldGet(this, _a, "m", _Cyclogon_segmentationY).call(this);
        if (angle > __classPrivateFieldGet(this, _a, "f", _Cyclogon_cycle)) {
            angle %= __classPrivateFieldGet(this, _a, "f", _Cyclogon_cycle);
        }
        for (let i = 0; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length); i++) {
            if (angle > 0) {
                if (angle >= __classPrivateFieldGet(this, _a, "f", _Cyclogon_values)[i]) {
                    __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Cyclogon_result) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_segmentY)[i], "f", _Cyclogon_result), angle -= __classPrivateFieldGet(this, _a, "f", _Cyclogon_values)[i];
                }
                else {
                    __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Cyclogon_result) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_diff).y(__classPrivateFieldGet(this, _a, "f", _Cyclogon_start)[i] + angle, __classPrivateFieldGet(this, _a, "f", _Cyclogon_start)[i], __classPrivateFieldGet(this, _a, "f", _Cyclogon_chord)[i]), "f", _Cyclogon_result);
                    return __classPrivateFieldGet(this, _a, "f", _Cyclogon_dir) * __classPrivateFieldGet(this, _a, "f", _Cyclogon_result);
                }
            }
            else {
                break;
            }
        }
        return __classPrivateFieldGet(this, _a, "f", _Cyclogon_dir) * __classPrivateFieldGet(this, _a, "f", _Cyclogon_result);
    }
    static generate(start = 0, polygon = [[0, 0]], length = Math.TAU, step = length * .001) {
        let end = start + length;
        let matrix = [];
        for (let i = start; i < end; i += step) {
            matrix.push([this.x(i, polygon), this.y(i, polygon)]);
        }
        return matrix;
    }
}
_a = Cyclogon, _Cyclogon_angle0 = function _Cyclogon_angle0(matrix) {
    __classPrivateFieldSet(this, _a, [], "f", _Cyclogon_end);
    for (let i = 1; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length) - 1; i++) {
        __classPrivateFieldGet(this, _a, "f", _Cyclogon_end).push(azimuth(matrix[i][1] - matrix[0][1], matrix[i][0] - matrix[0][0]));
        if (__classPrivateFieldGet(this, _a, "f", _Cyclogon_end)[i] < 0) {
            __classPrivateFieldGet(this, _a, "f", _Cyclogon_end)[i] += Math.TAU;
        }
    }
    __classPrivateFieldGet(this, _a, "f", _Cyclogon_end).push(azimuth(matrix[__classPrivateFieldGet(this, _a, "f", _Cyclogon_length) - 1][1] - matrix[0][1], matrix[__classPrivateFieldGet(this, _a, "f", _Cyclogon_length) - 1][0] - matrix[0][0]), 0);
}, _Cyclogon_absolute = function _Cyclogon_absolute(matrix) {
    __classPrivateFieldSet(this, _a, [], "f", _Cyclogon_abs);
    for (let i = 1; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length); i++) {
        __classPrivateFieldGet(this, _a, "f", _Cyclogon_abs).push(azimuth(matrix[i][1] - matrix[i - 1][1], matrix[i][0] - matrix[i - 1][0]));
    }
    __classPrivateFieldGet(this, _a, "f", _Cyclogon_abs).push(azimuth(matrix[0][1] - matrix[__classPrivateFieldGet(this, _a, "f", _Cyclogon_length) - 1][1], matrix[0][0] - matrix[__classPrivateFieldGet(this, _a, "f", _Cyclogon_length) - 1][0]));
    for (let i in __classPrivateFieldGet(this, _a, "f", _Cyclogon_abs)) {
        if (__classPrivateFieldGet(this, _a, "f", _Cyclogon_abs)[i] < 0)
            __classPrivateFieldGet(this, _a, "f", _Cyclogon_abs)[i] += Math.TAU;
    }
}, _Cyclogon_value = function _Cyclogon_value() {
    __classPrivateFieldSet(this, _a, [], "f", _Cyclogon_values);
    __classPrivateFieldSet(this, _a, 0, "f", _Cyclogon_cycle);
    for (let i = 1; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length); i++) {
        __classPrivateFieldGet(this, _a, "f", _Cyclogon_values).push(__classPrivateFieldGet(this, _a, "f", _Cyclogon_abs)[i] - __classPrivateFieldGet(this, _a, "f", _Cyclogon_abs)[i - 1]);
        if (__classPrivateFieldGet(this, _a, "f", _Cyclogon_values)[i] < 0)
            __classPrivateFieldGet(this, _a, "f", _Cyclogon_values)[i] += Math.TAU;
    }
    __classPrivateFieldGet(this, _a, "f", _Cyclogon_values).push(__classPrivateFieldGet(this, _a, "f", _Cyclogon_abs)[__classPrivateFieldGet(this, _a, "f", _Cyclogon_length) - 1] - Math.PI);
    __classPrivateFieldGet(this, _a, "f", _Cyclogon_values).forEach(value => __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Cyclogon_cycle) + value, "f", _Cyclogon_cycle));
}, _Cyclogon_begin = function _Cyclogon_begin() {
    __classPrivateFieldSet(this, _a, [], "f", _Cyclogon_start);
    for (let i = 0; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length); i++) {
        __classPrivateFieldGet(this, _a, "f", _Cyclogon_start).push(__classPrivateFieldGet(this, _a, "f", _Cyclogon_end)[i] - __classPrivateFieldGet(this, _a, "f", _Cyclogon_values)[i]);
    }
}, _Cyclogon_segmentationX = function _Cyclogon_segmentationX() {
    __classPrivateFieldSet(this, _a, [], "f", _Cyclogon_segmentX);
    __classPrivateFieldSet(this, _a, 0, "f", _Cyclogon_fullX);
    for (let i = 0; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length); i++) {
        __classPrivateFieldGet(this, _a, "f", _Cyclogon_segmentX)[i] = __classPrivateFieldGet(this, _a, "f", _Cyclogon_diff).x(__classPrivateFieldGet(this, _a, "f", _Cyclogon_end)[i], __classPrivateFieldGet(this, _a, "f", _Cyclogon_start)[i], __classPrivateFieldGet(this, _a, "f", _Cyclogon_chord)[i]);
        __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Cyclogon_fullX) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_segmentX)[i], "f", _Cyclogon_fullX);
    }
}, _Cyclogon_segmentationY = function _Cyclogon_segmentationY() {
    __classPrivateFieldSet(this, _a, [], "f", _Cyclogon_segmentY);
    __classPrivateFieldSet(this, _a, 0, "f", _Cyclogon_fullY);
    for (let i = 0; i < __classPrivateFieldGet(this, _a, "f", _Cyclogon_length); i++) {
        __classPrivateFieldGet(this, _a, "f", _Cyclogon_segmentY)[i] = __classPrivateFieldGet(this, _a, "f", _Cyclogon_diff).y(__classPrivateFieldGet(this, _a, "f", _Cyclogon_end)[i], __classPrivateFieldGet(this, _a, "f", _Cyclogon_start)[i], __classPrivateFieldGet(this, _a, "f", _Cyclogon_chord)[i]);
        __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _Cyclogon_fullY) + __classPrivateFieldGet(this, _a, "f", _Cyclogon_segmentY)[i], "f", _Cyclogon_fullY);
    }
}, _Cyclogon_init = function _Cyclogon_init(matrix) {
    __classPrivateFieldGet(this, _a, "f", _Cyclogon_chords).call(this, matrix);
    __classPrivateFieldGet(this, _a, "m", _Cyclogon_angle0).call(this, matrix);
    __classPrivateFieldGet(this, _a, "m", _Cyclogon_absolute).call(this, matrix);
    __classPrivateFieldGet(this, _a, "m", _Cyclogon_value).call(this);
    __classPrivateFieldGet(this, _a, "m", _Cyclogon_begin).call(this);
}, _Cyclogon_reset = function _Cyclogon_reset(matrix, angle) {
    __classPrivateFieldSet(this, _a, matrix, "f", _Cyclogon_polygon);
    __classPrivateFieldSet(this, _a, matrix.length, "f", _Cyclogon_length);
    __classPrivateFieldSet(this, _a, __classPrivateFieldSet(this, _a, 0, "f", _Cyclogon_loop), "f", _Cyclogon_result);
    __classPrivateFieldSet(this, _a, Math.sign(angle) || 1, "f", _Cyclogon_dir);
};
_Cyclogon_abs = { value: [] };
_Cyclogon_chord = { value: [] };
_Cyclogon_cycle = { value: 0 };
_Cyclogon_dir = { value: 1 };
_Cyclogon_end = { value: [] };
_Cyclogon_fullX = { value: 0 };
_Cyclogon_fullY = { value: 0 };
_Cyclogon_length = { value: 0 };
_Cyclogon_loop = { value: 0 };
_Cyclogon_polygon = { value: [[0, 0]] };
_Cyclogon_result = { value: 0 };
_Cyclogon_start = { value: [] };
_Cyclogon_segmentX = { value: [] };
_Cyclogon_segmentY = { value: [] };
_Cyclogon_values = { value: [] };
_Cyclogon_diff = { value: {
        x: (end, start, chord) => (Math.sin(end) - Math.sin(start)) * chord,
        y: (end, start, chord) => (Math.cos(end) - Math.cos(start)) * chord
    } };
_Cyclogon_chords = { value: (matrix) => {
        __classPrivateFieldSet(_a, _a, [], "f", _Cyclogon_chord);
        let zero = { x: matrix[0][0], y: matrix[0][1] };
        let diff;
        for (let i = 1; i < __classPrivateFieldGet(_a, _a, "f", _Cyclogon_length); i++) {
            diff = Point2D.distances({ x: matrix[i][0], y: matrix[i][1] }, zero);
            __classPrivateFieldGet(_a, _a, "f", _Cyclogon_chord).push(magnitude(diff.x, diff.y));
        }
        __classPrivateFieldGet(_a, _a, "f", _Cyclogon_chord).push(0);
    } };
