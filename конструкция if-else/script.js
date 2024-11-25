let age = prompt("Укажите ваш возраст");
let out = document.querySelector(".out");
age = Number(age);
if (age < 18) {
  out.innerHTML = "Доступ запрещен";
} else if (age >= 18 && age <= 65) {
  out.innerHTML = "Добро пожаловать";
} else {
  out.innerHTML = "Пожалуйста, соблюдайте осторожность";
}
