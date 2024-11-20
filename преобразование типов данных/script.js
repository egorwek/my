let year = 2023;
let st = "Текущий год : ";
console.log(st + String(year));
let m = ["", 0, "hello", null, undefined, 5, NaN];
m.forEach((value) => {
  let boolean = Boolean(value);
  console.log(`${value}, ${boolean}`);
});
// с этим мне помог gpt
let o = { name: "Анна", age: 25, isMember: true };
console.log(JSON.stringify(o));
let ost = JSON.stringify(o);
console.log(JSON.parse(ost));
