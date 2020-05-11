// ５つの改行の数字 n_1 ～ n_5 があるその中から一番小さい数を出力せよ
// できましたがもう少しコードを少なくできそうな気がします
reader.on('close', () => {
var n=[Number(lines[0]),Number(lines[1]),Number(lines[2]),Number(lines[3]),Number(lines[4])];

        console.log(Math.min.apply(null,n));
});

// 文字の一致 改行で分けられた文字aと文字bがあるaとbが同一ならOK,aとbが相違ならNGと出力せよ

reader.on('close', () => {
  var a =lines[0];
  var b =lines[1];
  if(a === b){
      console.log("OK");
  }else{
      console.log("NG");
  }
});

// 整数 N が入力として与えられます。1からNまでの整数を1から順に表示してください。ただし、表示しようとしている数値が、3の倍数かつ5の倍数のときには、"Fizz Buzz"3の倍数のときには、"Fizz"5の倍数のときには、"Buzz"を数値の代わりに表示してください。

//progateに似たような問題があったためほかの問題に比べて早くできました

reader.on('close', () => {
    var number = lines[0];
  for(var i = 1;i <= number;i++){
      if(i %3 === 0 && i%5===0){
          console.log("Fizz Buzz");
      }else if(i%3 === 0){
          console.log("Fizz");
      }else if(i%5 === 0){
          console.log("Buzz");
      }
      else{
          console.log(i);
      }
  }
});