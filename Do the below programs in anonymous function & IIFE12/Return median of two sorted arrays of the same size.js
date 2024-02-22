(function (arr1, arr2) {
  var mergedArray = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });

  var length = mergedArray.length;
  var median =
    (mergedArray[Math.floor((length - 1) / 2)] +
      mergedArray[Math.ceil((length - 1) / 2)]) /
    2;

  console.log(median);
})([1, 2, 3], [4, 5, 6]);
