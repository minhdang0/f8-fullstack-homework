/**
 * Add a custom reduce2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.reduce
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [initialValue] - Optional. Value to use as the first argument to the first call of the callback.
 * @returns {any} - The value that results from the reduction.
 */

Array.prototype.reduce2 = function (callback, initialValue) {
    if ( this.length === 0 && arguments.length < 2) {
      return "Reduce of empty array with no initial value"
    }
    
    let result = arguments.length < 2 ? this[0] : initialValue;
    let startIndex = arguments.length < 2 ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            result = callback(result, this[i], i, this);
        }
    }
    return result;
};

// Sample usage

// Sample 1

const arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result1); // 15

// Sample 2

const arr2 = [];

const result2 = arr2.reduce2((accumulator, value) => {
  return accumulator + value;
});

console.log(result2); // Error: Reduce of empty array with no initial value

// Sample 3

const arr3 = [];

const result3 = arr3.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result3); // 0
