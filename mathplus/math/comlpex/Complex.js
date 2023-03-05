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
import azimuth from "../../generic_calculations/azimuth.js";
import magnitude from "../../generic_calculations/magnitude.js";
export default class Complex {
    constructor(_a) {
        var _b, _c, _d, _e;
        var complex = __rest(_a, []);
        this.real = 0;
        this.imag = 0;
        this.add = ({ real = 0, imag = 0 }) => Complex.add(this, { real, imag });
        this.sub = ({ real = 0, imag = 0 }) => Complex.add(this, { real: -real, imag: -imag });
        this.mult = ({ real = 0, imag = 0 }) => Complex.mult(this, { real, imag });
        this.div = ({ real = 0, imag = 0 }) => Complex.mult(this, { real: 1 / real, imag: 1 / imag });
        this.real = (_c = (_b = complex.real) !== null && _b !== void 0 ? _b : complex[0]) !== null && _c !== void 0 ? _c : 0;
        this.imag = (_e = (_d = complex.imag) !== null && _d !== void 0 ? _d : complex[1]) !== null && _e !== void 0 ? _e : 0;
    }
    get modulus() { return Complex.modulus(this); }
    get argument() { return Complex.argument(this); }
    static add(complex, { real = 0, imag = 0 }) { complex.real += real, complex.imag += imag; }
    static sub(complex, { real = 0, imag = 0 }) { this.add(complex, { real: -real, imag: -imag }); }
    static mult(complex, { real = 0, imag = 0 }) { complex.real *= real, complex.imag *= imag; }
    static div(complex, { real = 0, imag = 0 }) { this.mult(complex, { real: 1 / real, imag: 1 / imag }); }
    static argument({ real, imag }) { return azimuth(imag, real); }
    static toPolar({ real, imag }) { return { argument: azimuth(imag, real), modulus: magnitude(imag, real) }; }
}
Complex.modulus = ({ real, imag }) => magnitude(real, imag);
Complex.fromPolar = ({ argument = 0, modulus = 0 }) => new Complex([Math.cos(argument) * modulus, Math.sin(argument) * modulus]);
Complex.ZERO = { real: 0, imag: 0 };
Complex.REAL_UNIT = { real: 1, imag: 0 };
Complex.IMAG_UNIT = { real: 0, imag: 1 };
Complex.COMPLEX_UNIT = { real: 1, imag: 1 };
