kadai

| 日付 | 問題の番号と名前 | かかった時間 | URL                                  | 問題                                     | 正か不か |
| ---- | ---------------- | ------------ | ------------------------------------ | ---------------------------------------- | -------- |
| 5/4  | D153 食材選び    | 1 時間以上   | https://paiza.jp/challenges/373/show | 3 つの牛肉の値段のうち真ん中のものを選べ | 不正解   |
|      |                  |              |                                      |                                          |          |
|      |                  |              |                                      |                                          |          |
|      |                  |              |                                      |                                          |          |
|      |                  |              |                                      |                                          |          |

# 5/4

## 問題の解釈

- 3 つの値 A.B,C から真ん中の数字を取り出すときは
- A が真ん中なら(B>A>C)か(C>A>B)のどちらかの条件を満たす
- B が真ん中なら(A>B>C)か(C>B>A)のどちらかの条件を満たす
- C が真ん中なら(B>C>C)か(A>B>C)のどちらかの条件を満たす
- 以上の 3 つの条件式を if 文を用いて出力する
- 条件が 2 つあるためどちらかが条件を満たせばよい`||`を使う

## 答えのコードもしくはやったとこまでのコード

- `const number =(a,b,c)=>{
    let middle = a;
    if(a>middle>b || b>middle>a){
        console.log(middle = c);
    }
        else if(a>middle>c || c>middle>a){
        console.log(middle = b);
    }
    else{
        console.log(middle=a);
        return middle;
    }
};
const middle = number(A B C);
`
