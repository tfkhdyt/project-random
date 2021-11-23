let A = 6;
let B = 7 % 2;
let C = A - B * 3;
let D = 0;
let E = 'love';

if (A <= 10 && B > 3) {
  A = C + B;
  C = A + (C % 2);
} else if (C > 13 && B - 2 > 3) {
  A = C + B + 1;
  C = A - (C % 3);
} else {
  A = C + B + 2;
  C = A - (C % 2);
}

F = (E == 'cinta') || (C > 3);
if (E == 'cinta' || C > 3) {
  D = 1;
  for (let K = 1; K < 9; K += 3) {
    D += 2;
  }
  E = 'becak';
} else {
  D = 2;
  while (D <= 6) {
    A -= 2;
    D += 2;
  }
  E = 'bemo';
}

console.log(`${A} ${B} ${C} ${D} ${E}`)
