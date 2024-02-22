(function (arr) {
  var uniqueArray = arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });

  console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);
