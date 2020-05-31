// 改行した二つの数a,bを掛け算して出力せよ

reader.on("close", () => {
  // 改行した2つの数aとbをnamber型で定義する
  const a = Number(lines[0]);
  const b = Number(lines[1]);
  // aとbをかけて出力する
  console.log(a * b);
});

//スペースで区切られた二つの数a bを足し算せよ

reader.on("close", () => {
  // スペースで区切られた文字列を配列に変える
  const num = lines[0].split(" ");
  // 配列の中身がstring型なのでnumber型に変換する
  const a = Number(num[0]);
  const b = Number(num[1]);
  // 変換したaとbをたして出力する
  console.log(a + b);
});

