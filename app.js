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

// const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");
// const container = document.querySelector(".container");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += colors[getRandomNo()];
//   }

//   document.body.style.backgroundColor = hexColor;
//   color.textContent = hexColor;
// });

// function getRandomNo() {
//   return Math.floor(Math.random() * colors.length);
// }
// let count = 0;
// const btns = document.querySelectorAll(".btn");

// const counterClass = document.querySelector(".counter");
// const counter = document.querySelector("#counter");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const conthh = e.currentTarget.classList;
//     if (conthh.contains("increase")) {
//       count++;
//     }
//     if (conthh.contains("decrease")) {
//       count--;
//     }
//     if (conthh.contains("reset")) {
//       count = 0;
//     }
//     if (count > 0) {
//       document.body.style.color = "green";
//     }
//     if (count < 0) {
//       document.body.style.color = "red";
//     }

//     counter.textContent = count;
//   });
// });

// const data = [
//   {
//     id: 1,
//     pic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//     name: "ram1",
//     job: "web1",
//     info: "#$1 #uwrhgfiuhrhfk bwiry iryhiuf iwuhiure fir igrh ih",
//   },
//   {
//     id: 2,
//     pic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
//     name: "ram2",
//     job: "web2",
//     info: "#$2 #uwrhgfiuhrhfk bwirydi laudantium consequatur expedita asperioresolestias magndi laudantium consequatur expedita asperioresolestias magndi laudantium consequatur expedita asperioresolestias magndi laudantium consequatur expedita asperioresolestias magn iryhiuf iwuhiure fir igrh ih",
//   },
//   {
//     id: 3,
//     pic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
//     name: "ram3",
//     job: "web3",
//     info: "#$3 di laudantium consequatur expedita asperioresolestias magn di laudantium consequatur expedita asperioresolestias magn #uwrhgfiuhrhfk bwiry iryhiuf iwuhiure fir igrh ih",
//   },
// ];

// // selection
// const pic = document.querySelector(".pic");
// const name = document.querySelector(".name");
// const job = document.querySelector(".job");
// const info = document.querySelector(".info");
// // btns
// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const surprise = document.querySelector(".surprise");

// let current = 0;

// window.addEventListener("DOMContentLoaded", function () {
//   showData(current);
// });

// function showData(mainData) {
//   const datacopy = data[mainData];
//   job.textContent = datacopy.job;
//   name.textContent = datacopy.name;
//   info.textContent = datacopy.info;
//   pic.src = datacopy.pic;
// }

// right.addEventListener("click", function () {
//   current++;

//   //
//   if (current > data.length - 1) {
//     current = 0;
//   }
//   showData(current);
//   //
// });
// left.addEventListener("click", function () {
//   current--;
//   //
//   if (current < 0) {
//     current = data.length - 1;
//   }

//   showData(current);
// });
// surprise.addEventListener("click", function () {
//   current = Math.floor(Math.random() * data.length);
//   showData(current);
// });

// const toggle = document.querySelector(".toggle");
// const hide = document.querySelector(".hide");
// const hideToggle = document.querySelector(".hide-toggle");

// toggle.addEventListener("click", function () {
//   if (hide.classList.contains("hide")) {
//     hide.classList.toggle("hide");
//   } else {
//     hide.classList.toggle("hide");
//   }
// });
// toggle.addEventListener("click", function () {
//   hide.classList.toggle("hide");
// });

// const toggle = document.querySelector(".toggle");
// const basicOff = document.querySelector(".basic");
// const modalOff = document.querySelector(".modal");

// toggle.addEventListener("click", function () {
//   basicOff.classList.toggle("basic-off");
//   modalOff.classList.toggle("modal-off");
// });
