class Circle {
    constructor(x, y, radius) {
        this.x = 0;
        this.y = 0;
        this.radius = 0;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    add(x = 0, y = 0) { this.x += x, this.y += y; }
    mult(m = 1) { this.x *= m, this.y *= m; }
    sub(x = 0, y = 0) { this.add(-x, -y); }
    div(d = 1) { this.mult(1 / d); }
    get diameter() { return Circle.diameter(this.radius); }
    get area() { return Circle.area(this.radius); }
    get circumference() { return Circle.circumference(this.radius); }
    static diameter(radius) { return radius * 2; }
    static area(radius) { return Math.PI * Math.pow(radius, 2); }
    static circumference(radius) { return this.diameter(radius) * Math.PI; }
}
export default Circle;
