var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Star_buffer;
export class Star {
    static generate({ x = 0, y = 0, peaks = 0, in_radius = 0, out_radius = 0, angle = 0 }) {
        __classPrivateFieldGet(this, _a, "f", _Star_buffer).star = [];
        __classPrivateFieldGet(this, _a, "f", _Star_buffer).one = Math.TAU * (1 / peaks);
        for (let i = 0; i < peaks; i++) {
            __classPrivateFieldGet(this, _a, "f", _Star_buffer).main = __classPrivateFieldGet(this, _a, "f", _Star_buffer).one * i + angle;
            __classPrivateFieldGet(this, _a, "f", _Star_buffer).sub = __classPrivateFieldGet(this, _a, "f", _Star_buffer).main + __classPrivateFieldGet(this, _a, "f", _Star_buffer).one * .5;
            __classPrivateFieldGet(this, _a, "f", _Star_buffer).star.push([x + Math.cos(__classPrivateFieldGet(this, _a, "f", _Star_buffer).main) * out_radius, y + Math.sin(__classPrivateFieldGet(this, _a, "f", _Star_buffer).main) * out_radius], [x + Math.cos(__classPrivateFieldGet(this, _a, "f", _Star_buffer).sub) * in_radius, y + Math.sin(__classPrivateFieldGet(this, _a, "f", _Star_buffer).sub) * in_radius]);
        }
        return __classPrivateFieldGet(this, _a, "f", _Star_buffer).star;
    }
    static last() { return __classPrivateFieldGet(this, _a, "f", _Star_buffer).star; }
}
_a = Star;
_Star_buffer = { value: {
        main: 0,
        sub: 0,
        star: [[0, 0]],
        one: 0
    } };
