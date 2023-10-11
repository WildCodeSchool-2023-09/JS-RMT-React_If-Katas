/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here

/*module.exports = function findMin(arr) {
    if (!arr || arr.length === 0) {
      return null;
    }
  
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
      }
    }
  
    return minValue;
  };
  */
  const min = (array) => {
   if (!array || array.lenght === 0) return null;
   console.log(array)
   let min = array[0];
   for (let i = l; i < array.lenght; i++) {
    if (min>array[i]) {
        min = array[i]
    }
   }
   return min;
  }

  module.exports = min;

