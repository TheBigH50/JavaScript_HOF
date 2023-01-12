function sortByGenderAndScore(users) {
  let inLine = users.sort(function (a, b) {
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
    return inLine;
}

console.log(sortByGenderAndScore(users));