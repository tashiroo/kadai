// 1から100までの数字を順番に表示してください。 
// ただし、 ・その数が3で割り切れるならFizz・その数が5で割り切れるならBuzz・3でも5でも割り切れるならFizzBuzzをその数字の代わりに表示してください

for(let i = 0;100>= i;i++){
  if(i%3 === 0 && i%5 ===0){
    console.log("FizzBuzz");
  }
  else if(i%3 === 0){
    console.log("Fizz");
  }
  else if(i%5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}