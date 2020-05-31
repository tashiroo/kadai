class Food {
  constructor(agemono, nimono) {
    this.agemono = agemono;
    this.nimono = nimono;
    console.log(`${this.agemono}おいしそう`);
    console.log(`味のしみた${nimono}`);
  }
}

const food1 = new Food("厚揚げ", "煮凝り");
const food2 = new Food("ヒレカツ", "おでん");
const food3 = new Food("天ぷら", "さばみそ");

class Teisyokuya {
  constructor(persons, order) {
    this.order = order;

    this.persons = persons;
  }

  itiren() {
    console.log("いらっしゃいませ、何名ですか?");
    console.log(this.persons);
    console.log("こちらの席へどうぞ");
    console.log("ご注文は？");
    console.log(`${this.order}です`);
  }
}

const teisyokuya1 = new Teisyokuya("1人", "焼肉定食");
const teisyokuya2 = new Teisyokuya("3人", "焼肉定食2つと焼き魚定食");

teisyokuya1.itiren();
teisyokuya2.itiren();
class Restaurant extends Teisyokuya {}
const restaurant1 = new Restaurant(
  "4人",
  "ハンバーグセットとクラブハウスサンドとドリンクバー4つ"
);

restaurant1.itiren();

class Takeout extends Restaurant {
  constructor(persons,order,casher){
    super(persons,order);
    this.casher = casher;

  }
  itiren() {
    console.log("いらっしゃいませご注文をどうぞ");
    console.log(`${this.order}です`);
    console.log(`${this.order}ですね合計${this.casher}です`); 
    console.log("ありがとうございました");
  } 
  }

  const takeout = new Takeout("","チーズバーガーセット","680円")

  takeout.itiren();