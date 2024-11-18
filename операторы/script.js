let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
let i = document.querySelector(".i");
let b = document.querySelector(".b");
let out = document.querySelector(".out");
b.onclick = function f1() {
  if (i.value % 2 == 0) {
    out.textContent = "Число чётное";
  } else {
    out.textContent = "Число нечётное";
  }
};
let b31 = document.querySelector(".b31");
let b32 = document.querySelector(".b32");
let out3 = document.querySelector(".out3");
let num = 0;
b31.onclick = function f31() {
  num++;
  out3.textContent = num;
};
b32.onclick = function f32() {
  num--;
  out3.textContent = num;
};
let balance = 100;
function f41(bal) {
  bal = balance;
  bal += 10;
  console.log(bal);
}
f41();
function f42(bala) {
  bala = balance;
  bala -= 10;
  console.log(bala);
}
f42();
function f43(balan) {
  balan = balance;
  balan *= 10;
  console.log(balan);
}
f43();
function f44(balanc) {
  balanc = balance;
  balanc /= 10;
  console.log(balanc);
}
f44();
