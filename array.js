//SECTION - JavaScript Arrays
//NOTE - Arrays are a special type of object that can be accessed through numbers from zero to N-1. Used for data structure. Displaying data
var arr = []
//can also be 'let'
arr = ['Erin', 1, 'Food', 100]
console.log(arr[2])
//terminal will give "Food" on "node arrays.js"

//NOTE - push() pop()
//!SECTION - push() adding a new item to the end of an array. 
arr.push('Joe')
console.log(arr)

//!SECTION - pop() removes an item from the end of an array

let lastItem = arr.pop()
console.log(lastItem)
//NOTE - given: $ node array.js
// Food
// ['Erin', 1, 'Food', 100, 'Joe']
// Joe

//!SECTION JavaScript for loop, the best way to iterate any array mathematically through for a for loop. 
console.log(arr.length)
for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i])
}
//NOTE - Array length is 4. index starts from 0, 1, 2, 3
//!SECTION - add an item to the beginning of an array
arr.unshift('apples')
console.log(arr)

//NOTE - Remove an item from the beginning of an array. 
let firstItem = arr.shift()
console.log(firstItem)
console.log(arr)

//!SECTION JavaScript Iterators
let a = [-5, -4, -3]
let b = 0 
let c = [12, 13, 14]

//NOTE - concat() method which is used to join two or more arrays
let result = a.concat(b, c)
//console.log(result)
let numbers = [2, 4, 7, 8, 9]
let isEven = (num) => {
    if(num % 2 == 0) {
    console.log(num + 'is even number')
return 
} else {
    console.log(num + 'is odd number')
} return false
}
//!SECTIONconsole.log(isEven(numbers))
//!SECTION numbers.every 
console.log(number.every(isEven))
numbers.some(isEven)
//NOTE - context - always an approach 
for( let j = 0; j < numbers.length; j++) {
    let temp = numbers[j]
if ( temp % 2 == 0) {

    console.log(temp + ' is even number')
 } else{
        console.log(temp + ' is an odd number')
    }}

    