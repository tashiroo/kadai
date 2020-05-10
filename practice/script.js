// 2つの正の整数がa, bが入力されるのでaとbを足した数を出力してください。
function add(a, b) {
  return a + b;
}

// console.log(add(1, 1));

// console.log(add(99, 0));

// 入力はどうやってくるの？
// const val = "1 1"; "1 1"のstring（文字列）

// 返却はどうするのか？
// console.log()をつかう
// const arg = "1 1";
// console.log(typeof arg);

// console.log("charAt:", arg.charAt());
// console.log("split: ", arg.split(" "));
// console.log("split0番目 -> 1: ", arg.split(" ")[0]);
// console.log("split1番目 -> 1: ", arg.split(" ")[1]);
// console.log("split1番目 type ? -> ?: ", typeof arg.split(" ")[1]);
// console.log("split0番目 -> 1: ", typeof Number(arg.split(" ")[0]));
// console.log("split2番目 -> undefined: ", arg.split(" ")[2]);

// const answer = add(examlple1Number[0], examlple1Number[1]);

// console.log(answer);

// console.log(Math.abs(-2));
const example1 = "1 1";
const example = "99 0";

const example1Arr = example1.split(" ");
console.log(example1);

const answer = add(example1[0],example1[1]);

console.log(answer);
