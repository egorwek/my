// server.js
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Создание сервера
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Node.js server!\n");
});

// Запуск сервера
server.listen(port, hostname, () => {
  console.log(`Сервер запущен на http://${hostname}:${port}/`);
});
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
