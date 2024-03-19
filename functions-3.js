// create a function that takes an array and return the types of elements (data types) in a new array
// ex: arrTypes([1, 3, "Ali", []]) -> ["number", "number", "string", "object"]

//es5
function arrTypes(arr) {
 let newArray = []
 for (let i = 0; i < arr.length; i++) {
    newArray [i] = typeof(arr[i])
 }
 return newArray
}
//console.log(arrTypes([1, 3, 5]))

//es6

const arrTypesNew = arr => arr.map(x => typeof x)
//console.log(arrTypesNew (["Ali", 3, 5]))
// .map "remaps" the array, spits one right back
//NOTE - the difference between ES5 and ES6 in this context is 

// create a function that takes 2-D arrays and returns the sum of minimum values in each row
/* 
 ex. sumMinArrays([
   [1, 2, 3, 4, 5], //index 0
   [6, 7, 8, 9, 10], // index 1
   [11, 12, 13, 14, 15] // index 2
 ])
 output -> 1 + 6 + 11 = 18
*/
// each place will have two numbers to locate it, eg 1 is 0,0
// going vertical then horizontal, 0,0 = 1 
// going vertical then horizontal, 2, 1 = 12

function sumOfMin(arr) { // Create a function named sumOfMin that takes an array as an argument. (arr) is the OUTER array
   let sum = 0; // Create a variable named sum and assign it the value of 0. // a placeholder for the counter. make sure it is a zero, so you can add to it. 
   for (let i = 0; i < arr.length; i++) { // Create a for loop that iterates through the array elements using the length of the array as the condition to stop the loop and increment the index by 1 each time the loop runs.
   // setting up first forloop. baseline to compare, selecting 1, 6, 6, assume they are the minimum. this is what we compare the others too
   // store this in "y", array 0,0 = 1 , 1 is now the baseline 
      let y = arr[i][0]; // Initialize y with the first element of the sub-array to handle comparison.
       
      for (let x = 0; x < arr[i].length; x++) { // Create a for loop that iterates through the sub-array elements.
         // interlocked with above forloop, x as a variable so its called different from i 
         if (y > arr[i][x]) { // Create a conditional statement that checks if the current element is less than the value of y.
         // 
            y = arr[i][x]; // If the condition is true, assign the current element to the value of y.
         // checking to see if its still the minimum 
         }
       }
       sum += y; // Add the value of y (minimum in the current sub-array) to the sum variable.
  // sumTotal takes minimum from each array, adds it (5 loops for 1 loop). Stops when it gets to the end of the array
      } 
   return sum; // Return the sum variable after the loop has finished running and all the minimum values have been added to the sum.
}
//console.log(sumOfMin([[5, 3, 4], [2, 5, 8]]));
//
console.log(sumOfMin([[2, 3, 4], [2, 5, 8]]));

// 
//es6

