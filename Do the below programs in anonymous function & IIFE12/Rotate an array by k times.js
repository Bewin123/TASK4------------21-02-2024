(function (arr, k) {
  var rotateArray = function (arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
  };

  var rotatedArray = rotateArray(arr, k);
  console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);
