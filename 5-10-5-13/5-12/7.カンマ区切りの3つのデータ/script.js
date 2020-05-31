// カンマ区切りの3つの文字列が与えられますそれを3行で出力せよ
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
  const N = lines[0].split(',');
  for(var i = 0;i < N.length;i++){
      console.log(N[i]);
  }
  
});