class SpiralArchimedean {
    static x(angle, distance = 0, translate = 0) {
        let r = translate + distance * angle;
        return Math.cos(angle) * r + translate;
    }
    static y(angle, distance = 0, translate = 0) {
        let r = translate + distance * angle;
        return Math.sin(angle) * r + translate;
    }
}
export default SpiralArchimedean;
