// 3 つの行があるそれを出力せよ
// 例 terre
//    erdfs
//    fsggr
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  console.log(lines[0]);
  console.log(lines[1]);
  console.log(lines[2]);
});