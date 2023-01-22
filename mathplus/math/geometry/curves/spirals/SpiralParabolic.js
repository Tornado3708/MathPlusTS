class SpiralParabolic {
    static x(angle, exponent = 1) {
        return Math.pow(angle, 1 / exponent) * Math.cos(angle);
    }
    static y(angle, exponent = 1) {
        return Math.pow(angle, 1 / exponent) * Math.sin(angle);
    }
}
export default SpiralParabolic;
