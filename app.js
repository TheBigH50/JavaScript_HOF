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
    gender: "male",
  },
  {
    name: "Fredet",
    age: 50,
    score: 85,
    isActive: false,
    gender: "female",
  },
  {
    name: "Samantha",
    age: 38,
    score: 94,
    isActive: true,
    gender: "female",
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
    gender: "male",
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
    gender: "male",
  },
  {
    name: "Pippet",
    age: 26,
    score: 77,
    isActive: false,
    gender: "female",
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
    gender: "male",
  },

  {
    name: "Merrilynn",
    age: 36,
    score: 82,
    isActive: true,
    gender: "female",
  },
];


function sortByGenderAndScore(users) {
  return users.sort(function (a, b) {
      if (a.gender < b.gender) {
        return -1;
      } else if (a.gender > b.gender) {
        return 1;
      } else {
        return b.score - a.score;
      }
    })
    .map(function (user) {
      return { name: user.name, score: user.score };
    });
}

users.forEach((users) => console.log(`name: ${users.name}`));

//Exe3

const smallUsers = users.map(({ name, score }) => {
  return { name, score };
});
console.log(smallUsers);

//Exe4

function isActive(user) {
  return user.isActive === true;
}

let filteredUsers = users.filter(isActive);

console.log(filteredUsers);

//Exe5

// users.sort((a, b) => b.score - a.score);
// console.log(users)

function sortDesc(user1, user2) {
  if (user1.score < user2.score) {
    return 1;
  } else {
    return -1;
  }
}

users.sort(sortDesc);
console.log(users);

//Exe6

function reduceSum(sum, user) {
  return sum + user.score;
}

let sumScores = users.reduce(reduceSum, 0);

console.log(`Avg user score: ${sumScores / users.length}`);
