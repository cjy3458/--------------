console.log({} === {});
console.log([] === []);

const number = 10;

function jay() {
  const number = 20;
  console.log(number);
}

jay();

num = "10";

console.log(num === 10);
console.log(num == 10);

// {
//   let a = 1;
// }

// console.log(a);

// if (a == undefined) {
//   const b = 10;
//   console.log(b);
// }

// console.log(b);

let a = 10 + "1";
let b = "11" - 1;
console.log(typeof a);
console.log(typeof b);

const original = {
  props: 10,
};
const diff = {
  props: 10,
};

const copy = original;

console.log(original === diff);
console.log(original.props === diff.props);
copy.props = 20;
console.log(original.props);

[1, 2, 3].keys;
