function pythagoras(a, b) {
   return a ** 2 + b ** 2;
}

const a = 3;
const b = 4;
const c = pythagoras(a, b);

console.log(`a: ${a}
b: ${b}

c² = a² + b²
   = ${a ** 2} + ${b ** 2}
   = ${c}

c  = ${Math.sqrt(c)}`);
