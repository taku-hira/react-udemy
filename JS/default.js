// デフォルト値

const sayHello = name => console.log(`こんにちは！${name}さん！`);

sayHello("村松");

// デフォルト値を設定する

const sayHello2 = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);

sayHello2();
sayHello2("村松");


const myProfile = {
    age: 25,
}

const {age, name = "ゲスト"} = myProfile;

const message = `私の名前は${name}です。年齢は${age}歳です。`;

console.log(message);