/* if (1 + 4 == 5) {
  console.log("Ok!");
} else {
  console.log("Error");
}

const num = 50;

if (num < 49) {
  console.log("Error");
} else if (num > 80) {
  console.log("Più");
} else {
  console.log("Ok!");
}

const num = 50;

num === 50 ? console.log("Ok!") : console.log("Error"); */

const num = 50;

switch (num) {
  case 49:
    console.log("Non è giusto");
    break;
  case 100:
    console.log("Non è giusto");
    break;
  case 50:
    console.log("Giusto!");
    break;
  default:
    console.log("Non adesso");
    break;
}
