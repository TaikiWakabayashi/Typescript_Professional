const resultNums = (...num: number[]): number => {
  let result = 0;

  for (let n of num) {
    result += n;
  }

  return result;
};

const array = [1, 10, 100, 1000, 10000];

console.log(resultNums(...array));

const toUpperOrLower = (str: string, upper?: boolean): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

const calc = (num: number = 100): number => {
  return num * num;
};

console.log(calc());

type User = {
  name: string;
  age: number;
};

const getName = (user: User): string => {
  return user.name;
};

const users: User[] = [
  { name: "uhyo", age: 25 },
  { name: "john smith", age: 30 },
];

const userNameArray: string[] = users.map(getName);

const userAgeArray: number[] = users.map((array) => {
  return array.age;
});

console.log(`${userNameArray} : ${userAgeArray}`);

const getFizzBuzzString = (num: number): string | number => {
  if (num % 5 === 0 && num % 3 === 0) {
    return "FIzzBuzz";
  } else if (num % 5 === 0) {
    return "Fizz";
  } else if (num % 3 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};

const sequence = (num1: number, num2: number): number[] => {
  const numArray: number[] = [];

  for (let i = num1; i <= num2; i++) {
    numArray.push(i);
  }

  return numArray;
};

for (let numArray of sequence(1, 100)) {
  const message = getFizzBuzzString(numArray);
  console.log(message);
}

const map = function <T, U>(value: T[], callBackFn: (value: T) => U): U[] {
  const result: U[] = [];

  for (let n of value) {
    result.push(callBackFn(n));
  }
  return result;
};

const data: number[] = [1, 1, 2, 3, 5, 8, 13];

const result = map(data, (x) => x * 10);

console.log(result);
