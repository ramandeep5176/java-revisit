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

// const toggle = document.querySelectorAll(".container");
// const basic = document.querySelectorAll(".basic");

// toggle.forEach(function (off) {
//   off.addEventListener("click", function (e) {
//     const ques = e.currentTarget;
//     ques.classList.toggle("basic");
//   });
// });
// const menu = [
//   {
//     id: 1,
//     title: "buttermilk pancakes",
//     category: "breakfast",
//     price: 15.99,
//     img: "./images/item-1.jpeg",
//     desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//   },
//   {
//     id: 2,
//     title: "diner double",
//     category: "lunch",
//     price: 13.99,
//     img: "./images/item-2.jpeg",
//     desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//   },
//   {
//     id: 3,
//     title: "godzilla milkshake",
//     category: "shakes",
//     price: 6.99,
//     img: "./images/item-3.jpeg",
//     desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//   },
//   {
//     id: 4,
//     title: "country delight",
//     category: "breakfast",
//     price: 20.99,
//     img: "./images/item-4.jpeg",
//     desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//   },
//   {
//     id: 5,
//     title: "egg attack",
//     category: "lunch",
//     price: 22.99,
//     img: "./images/item-5.jpeg",
//     desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//   },
//   {
//     id: 6,
//     title: "oreo dream",
//     category: "shakes",
//     price: 18.99,
//     img: "./images/item-6.jpeg",
//     desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//   },
//   {
//     id: 7,
//     title: "bacon overflow",
//     category: "breakfast",
//     price: 8.99,
//     img: "./images/item-7.jpeg",
//     desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//   },
//   {
//     id: 8,
//     title: "american classic",
//     category: "lunch",
//     price: 12.99,
//     img: "./images/item-8.jpeg",
//     desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//   },
//   {
//     id: 9,
//     title: "quarantine buddy",
//     category: "shakes",
//     price: 16.99,
//     img: "./images/item-9.jpeg",
//     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//   },
//   {
//     id: 10,
//     title: "bison steak",
//     category: "dinner",
//     price: 22.99,
//     img: "./images/item-10.jpeg",
//     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//   },
// ];

// console.log(exp);

// code logic

// const container = document.querySelector(".container");
// const containerBtn = document.querySelector(".container-btn");
// // console.log(btns);
// window.addEventListener("DOMContentLoaded", function () {
//   displayMenu(menu);
//   // emp

//   // unique dynamic btns (working now)
//   const unique = menu.reduce(
//     function (total, item) {
//       const ggg = item.category;
//       if (!total.includes(ggg)) {
//         total.push(ggg);
//       }

//       // console.log(ggg);
//       return total;
//     },
//     ["all"]
//   );
// console.log(unique);
// dynamic btns

// dynamic btns ends
// unique dynamic btns ends
// dynamic btns

//   const ram = unique
//     .map(function (rama) {
//       return `
//     <button type="button" data-id=${rama} class="filter-btn">${rama}</button>
//     `;
//     })
//     .join("");
//   // display = ram;
//   containerBtn.innerHTML = ram;
//   // dynamic btns end
//   const btns = document.querySelectorAll(".filter-btn");
// // console.log(btns);
//   // filter method
//   btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const category = e.currentTarget.dataset.id;
//       const filtering = menu.filter(function (menuDatas) {
//         if (menuDatas.category === category) {
//           return menuDatas;
//         }
//       });

//       if (category === "all") {
//         return displayMenu(menu);
//       } else {
//         displayMenu(filtering);
//       }
//     });
//   });
//   // filter method end
// });

// function displayMenu(menuData) {
//   let display = menuData.map(function (data) {
//     // console.log(data.desc);
//     return `

//       <img src="${data.img}" alt="" class="img">
//       <h3 class="title">${data.title}</h3>
//       <h4 class="price">
//        ${data.price}
//       </h4>
//       <p class="desc">${data.desc}</p>

//         `;
//   });

//   display = display.join("");
//   container.innerHTML = display;
// }

// function name(params) {

// }
// const rr=()=>{

// }

// const array = ["jdg", 66555, "wjediu", "56ee", "ew65", 56, 89];

// const [jdgrr,r66555,wjediu, ee, ew65, r56, r89] = array;

// console.log(jdgrr, 66555,wjediu, ee, ew65,56,80000);

// function show() {
//   // map
//   const container = document.querySelector(".container-btn");
//   const ram = menu
//   .map(function (ra) {
//     const { id, title, price, img } = ra;
//     return `<P>${id},${title},${price} ></p>`;
//   })
//   .join("");
//   // console.log(ram);
//   container.innerHTML = ram;
//   // map end
// }

// // btn
// const btns = document.querySelector(".btn");

// const rammm = btnsa
// .map(function (roll) {
//   const { btnName } = roll;
//   return `<button class="filter-btn" >${btnName}</button>`;
// })
// .join("");
// // console.log(rammm);
// btns.innerHTML = rammm;

// // btn end
// const click = document.querySelectorAll(".filter-btn");
// click.forEach(function (e) {
//   e.addEventListener("click", function (e) {
//     // show();
//     btns.style.color="red"

//   });
// });

// async await
// promise
// const imgCont = document.querySelector(".img-con");
// const h1 = document.querySelector(".img-con1");
// const h2 = document.querySelector(".img-con2");
// const h3 = document.querySelector(".img-con3");
// // const image = "./images/item-1.jpeg";
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   change(1000, h1, "green").then(() => {
//     change(1000, h2, "red").then(() => {
//       change(1000, h3, "green").catch((err) => {console.log(err);});
//     });
//   });
// });

// function change(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`wrong selection ${element}`));
//     }
//   });
// }

// btn.addEventListener("click", () => {
//   loadimg(image)
//     .then((raman) => imgCont.appendChild(raman))
//     .catch((err) => console.log(err));

//   // console.log(image);
// });
// function loadimg(image) {
//   return new Promise((resolve, reject) => {
//     let img = new Image();
//     img.addEventListener("load", () => {
//       resolve(img);
//     });
//     img.addEventListener("error", () => {
//       reject(new Error(`loading failed chexk : ${image}`));
//     });
//     img.src = image;
//   });
// }

// old promise
// const promise = new Promise((resolve, reject) => {
//   let vall = 5;
//   if (vall > 8) {
//     resolve(`big`);
//   } else {
//     reject(`small`);
//   }
// });
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// old promise end

// async / await

// const h1 = document.querySelector(".img-con1");
// const h2 = document.querySelector(".img-con2");
// const h3 = document.querySelector(".img-con3");
// // const image = "./images/item-1.jpeg";
// const btn = document.querySelector(".btn");

// try {
//   btn.addEventListener('click', async ()=>{
//   await change(1000, h1, "green");
//   await change(1000, h2, "green");
//   await change(1000, h3, "green");
// })
// } catch (error) {
//   console.log(error);
// }

// // btn.addEventListener("click", () => {
// //   change(1000, h1, "green").then(() => {
// //     change(1000, h2, "red").then(() => {
// //       change(1000, h3, "green").catch((err) => {console.log(err);});
// //     });
// //   });
// // });

// function change(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`wrong selection ${element}`));
//     }
//   });
// }

//ajax

// const btn = document.querySelector(".btn");
// const path = "./pp/menu.json";
// btn.addEventListener("click", function () {
//   logic(path);
// });
// function logic() {
//   const xhr = new XMLHttpRequest();
//   // console.log();
//   xhr.open("GET", path);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       console.log(data);
//       const newData = data
//         .map((item) => {
//           return `<P>${item.bb}</p>`;
//         })
//         .join("");
//       const div = document.createElement("a");
//       div.innerHTML = newData;
//       document.body.appendChild(div);
//       //
//       // const gt = xhr.responseText;
//       // const text = document.createElement("p");
//       // text.textContent = gt;
//       // document.body.appendChild(text);
//       //
//     } else {
//       console.log({ text: xhr.statusText, status: xhr.status });
//     }
//   };
//   xhr.send();
// }
// logic();

// in htmlresy

// JSON

export const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke shssed `,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skaing.`,
  },
];

menu.forEach(function (data) {
  // ext
  const ram = data.desc;
  const ram1 = data.img;
  const ram12 = data.title;
  // elements
  const body = document.body;
  const p = document.createElement("p");
  const p12 = document.createElement("p");
  const pr = document.createElement("img");

  p.innerText = ram;
  p12.innerText = ram12;
  pr.src = ram1;
  body.append(pr, p, p12);

  // body.append(ram);
});
