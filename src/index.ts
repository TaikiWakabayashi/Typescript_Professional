const message: string = "Hello world";

console.log(message);

const bigNum: bigint = 123n;

// const x: bigint = 123.1n; Bigint型は整数以外使えない。

const x: bigint = 12n;

console.log(bigNum / x); // 10n（徐算の結果が小数点がつく場合。整数に丸め込まれる。）

const num: number = 123;

// console.log(bigNum + num); コンパイルエラー（Bigint型とnumber型は計算できない。）
