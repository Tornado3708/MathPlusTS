class SpiralSinusoidal {
}
SpiralSinusoidal.cos = {
    x(angle, base = 1, exponent = 1) {
        let r = Math.pow(base, exponent) * Math.cos(angle * exponent);
        return Math.cos(angle) * r;
    },
    y(angle, base = 1, exponent = 1) {
        let r = Math.pow(base, exponent) * Math.cos(angle * exponent);
        return Math.sin(angle) * r;
    }
};
SpiralSinusoidal.sin = {
    x(angle, base = 1, exponent = 1) {
        let r = Math.pow(base, exponent) * Math.sin(angle * exponent);
        return Math.cos(angle) * r;
    },
    y(angle, base = 1, exponent = 1) {
        let r = Math.pow(base, exponent) * Math.sin(angle * exponent);
        return Math.sin(angle) * r;
    }
};
export default SpiralSinusoidal;
