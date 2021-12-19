function pythagoras(a, b) {
   return a ** 2 + b ** 2;
}

const a = 6;
const b = 9;
const c = pythagoras(a, b);

console.log(`a: ${a}
b: ${b}

c² = a² + b²
   = ${a ** 2} + ${b ** 2}
   = ${c}

c  = ${Math.sqrt(c).toFixed(2)}`);
