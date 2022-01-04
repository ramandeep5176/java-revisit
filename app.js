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

const data = [
  {
    id: 1,
    img: "https://www.bing.com/images/search?view=detailV2&ccid=oInVkI3y&id=37D4E86FB245498302C71CE50721973E8A09DB99&thid=OIP.oInVkI3ykfE9iRRhXmASxAHaEo&mediaurl=https%3a%2f%2fhddesktopwallpapers.in%2fwp-content%2fuploads%2f2015%2f09%2fleopard-pics.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a089d5908df291f13d8914615e6012c4%3frik%3dmdsJij6XIQflHA%26pid%3dImgRaw%26r%3d0&exph=1600&expw=2560&q=pics&simid=608049833231737275&FORM=IRPRST&ck=ACA1F727721397D628B8CCAEC78D7317&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0",
    name: "ram1",
    job: "web1",
    info: "#$1 #uwrhgfiuhrhfk bwiry iryhiuf iwuhiure fir igrh ih",
  },
  {
    id: 2,
    img: "   https://www.bing.com/images/search?view=detailV2&ccid=cfF%2btihK&id=D4FAE080EE5663EDAFE5DF80502683B11F00ABC3&thid=OIP.cfF-tihKDFz0QKmaaIgWiAHaEo&mediaurl=https%3a%2f%2f10wallpaper.com%2fwallpaper%2f1680x1050%2f1308%2fchillin-Landscape_Pics_HD_Wallpaper_1680x1050.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.71f17eb6284a0c5cf440a99a68881688%3frik%3dw6sAH7GDJlCA3w%26pid%3dImgRaw%26r%3d0&exph=1050&expw=1680&q=pics&simid=608040251155297297&FORM=IRPRST&ck=3616475C3EE1062D73CF238544A97D9C&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0   ",
    name: "ram2",
    job: "web2",
    info: "#$2 #uwrhgfiuhrhfk bwiry iryhiuf iwuhiure fir igrh ih",
  },
  {
    id: 3,
    img: "  https://www.bing.com/images/search?view=detailV2&ccid=p4a2xf65&id=462809F358DFBC007EA5116E9D14F3AF65FF4462&thid=OIP.p4a2xf659BA4qMRADZj-WgHaER&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.a786b6c5feb9f41038a8c4400d98fe5a%3Frik%3DYkT%252fZa%252fzFJ1uEQ%26riu%3Dhttp%253a%252f%252fwww.askququ.com%252fuploads%252fallimg%252f170710%252f1_170710214030_4.jpg%26ehk%3DKwcnhsdjxCrOPSrZgQqEOIDFle5t1%252bkmZRYqa%252f3B%252bZc%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=338&expw=586&q=pics&simid=608011784115214976&form=IRPRST&ck=FD77F9CE2D7FBD3AD15B855D8C6687AE&selectedindex=12&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_cfF%252BtihK*cp_3616475C3EE1062D73CF238544A97D9C*mid_D4FAE080EE5663EDAFE5DF80502683B11F00ABC3*simid_608040251155297297*thid_OIP.cfF-tihKDFz0QKmaaIgWiAHaEo&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0 ",
    name: "ram3",
    job: "web3",
    info: "#$3 #uwrhgfiuhrhfk bwiry iryhiuf iwuhiure fir igrh ih",
  },
];


