
{/* アロー関数 */}
const func1 = (str) => {
    return str;
}
// 省略
const func2 = str => {
    return str;
}

// さらに省略 関数の中身が1行の場合は、returnも省略できる
const func3 = str => str;

const func4 = (num1, num2) => num1 + num2;

//　オブジェクトを返す場合は、()で括る必要がある
const func5 = (num1, num2) => ({
    num1: num1,
    num2: num2
});

console.log(func1("func1です"));
console.log(func2("func2です"));
console.log(func3("func3です"));
console.log(func4(5, 10));
console.log(func5(5, 10));

// 分割代入 英訳: Destructuring assignment