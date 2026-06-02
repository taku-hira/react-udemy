// 分割代入

const myProfile = {
  name: "村松",
  age: 25
};

const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;

console.log(message1);

// 分割代入を使うと、以下のように書くことができる
const {name, age} = myProfile;
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// 配列の分割代入
const myProfile2 = ["村松", 25];

const message3 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message3);

// 自分で変数名をセットする
const [name2, age2] = myProfile2;
const message4 = `私の名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);