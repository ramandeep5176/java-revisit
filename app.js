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
// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelectommr(".three");
// const four = document.querySelector(".four");
// const active = document.querySelectorAll(".active");
// const na = document.getElementById("four");
// four.addEventListener("click", toggle);
// function toggle() {
//   na.classList.toggle("active");
// }

// const colors = ["black", "green", "red"];
// const two = document.getElementById("two");

// two.addEventListener("click", function () {
//   const randomNumber = 2;
//   document.two.textContent = two[randomNumber];
// });

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNo();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNo() {
  return Math.floor(Math.random() * colors.length);
}
