/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

const min = (tab) => {

    if (!tab && tab.length === 0) return null;

    let min = tab[0];

    for(let i = 1; i < tab.length; i++){
        if(min > tab[i]){
            min = tab[i];
        }
    }

    return min;

};


module.exports = min;
