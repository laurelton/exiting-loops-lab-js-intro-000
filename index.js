var breakOut = function(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }

    array[i] = changeValue;
  }
};

var keepGoing = function(array, changeValue, skipValue) {};

var findBy = function(array, findFn) {};
