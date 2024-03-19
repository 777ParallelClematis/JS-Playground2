function greeting() {
    return console.log('Hello World!')
}

console.log(greeting())

//NOTE - Write a function that adds any two numbers and return the result.

function addition() {
    let a = 1; let b = 2
    return console.log( a + b )
    console.log(addition)
}


// try again
function sum(a, b) {
    return a+b
}
console.log(sum(2,3))

//Write a function that takes an array check whether the sum of its elements is even or odd, the value should return 'even' or 'odd'
 
function checkArraySum(arr) {
    // declared a function assigned it a name "check array sum", placeholder between(), where you can accept any sort of array function,
    let sum = 0
    // declared variable
    for(i = 0; i <arr.length; i++)
    // for loop, declared with parentheses with 3 condictions of i, build it to be flexible "i++"
       sum += arr[i]
       //increment, "+=" means ADD, first index of the Array
    if (sum%2 == 0) {
        // if statement
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(checkArraySum([0, 1, 5]))

function checkArraySum(arr) {
    let sum = 0
    for(i = 0; i <arr.length; i++)
       sum += arr[i]
    // can also be written sum = sum arr[i]
    if (sum%2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(checkArraySum([1, 3, 5]))

// write a function that takes an array of items and returns only integers
// ['Ali', 3, 'Isaac', 5, 9] => [3, 5, 9]

function onlyInteger(arr) {
    // defined the function
let integer = []
//declared integer , assigned it to an empty array
for(let i = 0; i < arr.length, i++;) {
// started for loop
    if (Number.isInteger(arr[i]))
// number = object, a functionality, can attach a function to it 
    integer.push(arr[i])
// push the wanted values (integers) into the new array
}
}
return integer
console.log(cleansed(['Erin', 2, 3, 4]))

//Create a function that takes an array with numbers and return an array with the elemts multiplied by two
// arrayByTwo([2, 5, 4] -> [4, 8, 10]
function arrayByTwo(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] *=2
    }
    return arr
}
console.log(arrayByTwo(2, 5, 4))