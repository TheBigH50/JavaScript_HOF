console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//Exe1

let plus = function (plusNumber) {
  return function (number) {
    return number + plusNumber;
  };
};

const plus15 = plus(15);

console.log(plus15(10));

//Exe2

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach(users => console.log(`name: ${users.name}`));