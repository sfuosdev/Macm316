// trapezoidal rule
// trapezoidal(func, x_start, x_end, interval)
import {create, all} from "mathjs";

function trapezoidal(func, x_start, x_end, interval) {
    const math = create(all, {});
    const node = math.parse(func);
    const f = node.compile();
    
    const delta = (x_end - x_start) / interval;

    let total = f.evaluate({x: x_start}) + f.evaluate({x:x_end});
    for (let i = 1; i < interval; i++) {
        total += 2 * f.evaluate({x: x_start + (i * delta)});
    }

    return (delta / 2) * total;
}

export default trapezoidal;