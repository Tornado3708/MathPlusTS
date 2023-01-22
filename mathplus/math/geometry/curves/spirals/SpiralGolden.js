class SpiralGolden {
    static x(angle, mult = 1) {
        let radius = mult * Math.pow(Math.PHI, (2 * angle * (1 / Math.PI)));
        return Math.cos(angle) * radius;
    }
    static y(angle, mult = 1) {
        let radius = mult * Math.pow(Math.PHI, (2 * angle * (1 / Math.PI)));
        return Math.sin(angle) * radius;
    }
}
export default SpiralGolden;
