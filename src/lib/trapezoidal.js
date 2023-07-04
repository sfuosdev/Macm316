// trapezoidal rule
// trapezoidal(func, xStart, xEnd, n)
import { create, all } from 'mathjs';

function trapezoidal(func, xStart, xEnd, n) {
    const math = create(all, {});
    const node = math.parse(func);
    const f = node.compile();

    const delta = (xEnd - xStart) / n;

    let total = f.evaluate({ x: xStart }) + f.evaluate({ x: xEnd });
    for (let i = 1; i < n; i += 1) {
        total += 2 * f.evaluate({ x: xStart + i * delta });
    }

    return (delta / 2) * total;
}

export default trapezoidal;
