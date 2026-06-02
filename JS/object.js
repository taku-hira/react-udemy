// オブジェクトの省略記法

const name = "村松";
const age = 25;

// const myProfile = {
//     name: name,
//     age: age,
// }

// オブジェクトの省略記法を使うと、以下のように書くことができる
// プロパティ名と変数名が同じ場合、省略して書くことができる
const myProfile = { name, age }

console.log(myProfile);