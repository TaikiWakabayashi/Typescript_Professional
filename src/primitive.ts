import { readlink } from "fs";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 入力値を出力
rl.question("文字列を入力して下さい：", (line) => {
  console.log(`${line}が入力されました。`);
  rl.close();
});

// 入力値を計算して出力
rl.question("数値を入力して下さい", (line) => {
  // 入力値を数値に変換
  const resultNum = Number(line);

  console.log(resultNum + 1000);
});
