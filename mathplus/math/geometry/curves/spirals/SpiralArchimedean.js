let matrix = [[0, 0]];
class SpiralArchimedean {
    static x(angle, radius = 0, delay = 0) {
        let r = delay + radius * angle;
        return Math.cos(angle) * r + delay;
    }
    static y(angle, radius = 0, delay = 0) {
        let r = delay + radius * angle;
        return Math.sin(angle) * r + delay;
    }
    static generate(start = 0, radius = 1, delay = 0, length = Math.TAU, step = length * .001) {
        matrix = [];
        for (let i = start; i < start + length; i += step) {
            matrix.push([
                this.x(i, radius, delay),
                this.y(i, radius, delay)
            ]);
        }
        return matrix;
    }
    static last() { return matrix; }
}
export default SpiralArchimedean;
