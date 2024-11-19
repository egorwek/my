let a = 1;
let b = "hello";
let c = true;
let d = null;
let e = undefined;
let f = [1, 2, 3];
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);
let text = "Javascript";
let g = "Я изучаю ";
console.log(g + text);
let isAdult = true;
let age = 20;
if (age <= 18) {
  isAdult = false;
} else {
  isAdult = true;
}
console.log(isAdult);
let out = document.querySelector(".out");
const p41 = prompt("Первое число");
const p42 = prompt("Второе число");
function f41() {
  out.textContent = Number(p41) + Number(p42);
}
f41();
