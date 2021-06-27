let num = 20;

function showFirstMessage(text) {
  console.log(text);
  num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

/* function calc(a, b, c) {
  return a - b + c;
} */
/* console.log(calc(4, 5, 3));
console.log(calc(5, 8, 4));
console.log(calc(10, 9, 5));

function red() {
  let num = 50;
  return num;
} */

const anotherNum = red();
console.log(anotherNum);

const logger = function () {
  console.log("Hello");
};
logger();

/* function calc (a, b) {
  return a - b;
} */
const calc = (a, b) => {
  console.log'1');
   return a + b;
};
