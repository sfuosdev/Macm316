import { create, all } from 'mathjs';


function simpsonsRule(f, xStart, xEnd, n) {
 const math = create(all);
 const parser = math.parser();
 parser.evaluate(`f(x) = ${f}`);


 if (n%2 !==0){
   n= n-1
 }
  const h = (xEnd - xStart) / n;
  const xValues = [];
 for (let i = 0; i <= n; i++) {
   xValues.push(xStart + i * h);
 }
  let sumEven = 0;
 let sumOdd = 0;
  for (let i = 1; i < n; i++) {
   parser.set('x', xValues[i]);
   const value = parser.evaluate('f(x)');
  
   if (i % 2 === 0) {
     sumEven += value;
   } else {
     sumOdd += value;
   }
 }
  parser.set('x', xValues[0]);
 const fStart = parser.evaluate('f(x)');
  parser.set('x', xValues[n]);
 const fEnd = parser.evaluate('f(x)');
  const integral = (h / 3) * (fStart + fEnd + 4 * sumOdd + 2 * sumEven);
  return integral;
}




export default simpsonsRule

