class Cycloid {
    static x(angle, radius = 1) { return radius * (angle - Math.sin(angle)); }
    static y(angle, radius = 1) { return radius * (1 - Math.cos(angle)); }
    static generate(start = 0, length = 0, step = .01, radius = 1) {
        let matrix = [];
        for (let i = start; i < length; i += step) {
            matrix.push(this.x(i, radius), this.y(i, radius));
        }
        return matrix;
    }
}
export default Cycloid;
