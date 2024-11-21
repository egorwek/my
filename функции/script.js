function greet(name) {
  console.log("Привет " + name);
}
greet("Егор");
function outerFunction() {
  let message = "Hello from outer!";
  function innerFunction() {
    console.log(message);
  }

  innerFunction();
}
outerFunction();
function calculateArea(width, height) {
  if (height === undefined) {
    height = width;
  }
  console.log(width * height);
}
calculateArea(5, 10);
calculateArea(7);
