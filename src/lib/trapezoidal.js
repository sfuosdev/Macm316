// trapezoidal rule
// trapezoidal(func, xStart, xEnd, interval)
import { create, all } from 'mathjs';

function trapezoidal(func, xStart, xEnd, interval) {
    const math = create(all, {});
    const node = math.parse(func);
    const f = node.compile();

    const delta = (xEnd - xStart) / interval;

    let total = f.evaluate({ x: xStart }) + f.evaluate({ x: xEnd });
    for (let i = 1; i < interval; i += 1) {
        total += 2 * f.evaluate({ x: xStart + i * delta });
    }

    return (delta / 2) * total;
}

export default trapezoidal;
