
const num = "1300";

console.log(num.toLocaleString()); // 1,300

const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum);

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
}

console.log(checkSum(50, 40));
console.log(checkSum(50, 60));

// 論理演算子の本当の意味を知ろう && ||

// truthy, falsy

// "ABC" 0 10 undefined null false NaN "" [] {}
const val = [];
if (val) {
    console.log("この文字列はtrueです");
} else {
    console.log("この文字列はfalseです");
}

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
    console.log("1か2はtrueになります");
}

if (flag1 && flag2) {
    console.log("1も2もtrueになります");
}

// || は左側がtruthyなら左側を返す。そうでなければ右側を返す
const num1 = null
const fee = num1 || "金額未設定です";

console.log(fee);

// && は左側がfalsyならその時点で返却する

const num2 = null;
const fee2 = num2 && "何か設定されました";

console.log(fee2);