import Calculator from "./calculator";

const x = 100;
const y = 200;

const calc = new Calculator();
const result = calc.add(x, y);

console.log(`${x} + ${y} = ${result}`);
