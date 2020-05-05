var height = 1.7;
var weight = 60;

// この下にコードを書いてください



console.log(`BMIは${weight/height/height}です`)

console.log(`適正体重は${height*height*22}kgです`);

// ・18.5未満の場合は痩せ気味です・18.5以上25未満の場合は普通です・25以上の場合は肥満気味ですと出力してください。

var BIM = weight/height/height;

if(18.5 > BIM){
  console.log("痩せ気味です");
}
else if (25 > BIM && BIM >=18.5){
  console.log("普通です");
}
else{
  console.log("肥満気味です");
}