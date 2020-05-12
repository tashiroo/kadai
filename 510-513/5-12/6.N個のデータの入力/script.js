// 1行目でNが与えらます。2行目でN個の文字列が半角スペース区切りで与えられます。N個の文字列をＮ行で出力せよ
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
       const list= lines[1].split(' ');
      var n = lines[0];
    for(var i =0;i < n ;i++){
     console.log(list[i]);
        
    }
  
});