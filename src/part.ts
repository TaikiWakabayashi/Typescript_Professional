type Dog = {
  name: string;
};

type Animal = {
  name: string;
  age: number;
};

type func1 = (dog: Dog) => Animal;

type func2 = (animal: Animal) => Dog;

const sampleFunc1: func1 = (dog: Dog) => {
  const animal: Animal = { name: dog.name, age: 33 };

  return animal;
};

const sampleFunc2: func2 = (animal: Animal) => {
  const dog: Dog = { name: animal.name };

  return dog;
};

const b: func2 = sampleFunc1;
// const b: func1 = sampleFunc2; → コンパイルエラー

type UnaryFunc = (arg: number) => number;
type BinaryFunc = (left: number, right: number) => number;

const double: UnaryFunc = (arg: number) => arg * 2;
const add: BinaryFunc = (left: number, right: number) => left + right;

const bin: BinaryFunc = double;
console.log(bin(1, 2));
// console.log(bin(1)); → コンパイルエラー
// const bin2: UnaryFunc = add; → コンパイルエラー
