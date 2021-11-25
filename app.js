//

//

// const amout = 50;
// const ram = 5;
// function calculate(conversion) {
//   return conversion * 9;
// }

// const newsd = calculate(ram);

// console.log(newsd);

// const person = 'ggff';

// if (person === "ggff") {
//   console.log(`gg`);
// }else{
//     console.log(`gggk`);
// }

// let amount = 5;

// while (amount <= 15) {
//   console.log(amount);
//   amount++;
// }

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const active = document.querySelectorAll(".active");
var na = document.getElementById( "four");

four.addEventListener("click", toggle);
function toggle() { 
  na.classList.toggle("active");
}
