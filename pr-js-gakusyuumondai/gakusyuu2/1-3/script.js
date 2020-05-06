var scores = [88, 62, 65, 21, 47, 92, 57, 89, 79, 89, 54, 82, 69, 72, 74, 54, 66, 92, 64, 96, 47, 89, 95, 93, 70, 30, 84, 93, 81, 98, 78, 96, 32, 56, 64, 42, 67];

// この下にコードを書いてください
let sum = 0;

let high =0;

for(let i =0;i<scores.length;i++){

  sum +=scores[i];
  
  if(scores[i] > high){
    high =scores[i];
  }
}
console.log(`平均点は${sum/scores.length}です`);

console.log(`最高点は${high}`);
