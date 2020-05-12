// 3つの文字列がカンマ区切りで1行で与えられます。それを3行で出力せよ
process.stdin.resume();
ocess.stdin.setEncoding('utf8');
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
         const list= lines[1].split(',');
      var n = lines[0];
    for(var i =0;i < n ;i++){
     console.log(list[i]);
        
    }
  
});