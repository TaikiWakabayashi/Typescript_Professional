import * as fs from "fs";

const filePath: string = "./sample.txt";

const regExp = /uhyo/g;

fs.readFile(filePath, "utf-8", (err, data) => {
  if (data) {
    const uhyoArr: RegExpMatchArray | null = data.match(regExp);

    if (uhyoArr) {
      console.log(uhyoArr.length);
    }
  } else {
    console.log(err);
  }
});
