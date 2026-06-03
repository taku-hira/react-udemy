// mapやfilterを使用した配列処理

// map
const nameArr = ["田中", "山田", "村松"];

const nameArr2 = nameArr.map((name, index) => {
    return `${index + 1}番目は${name}です。`;
});

console.log(nameArr2);

// filter

const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
});

console.log(newNumArr);


const newNameArr = nameArr.map((name) => {
    if (name === "村松") {
        return name;
    } else {
        return `${name}さん`;
    }
});

console.log(newNameArr);


