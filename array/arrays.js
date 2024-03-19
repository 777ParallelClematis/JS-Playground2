//create a function which takes two strings (p1 and p2) as argumentsand returns a string
// stating the winner (Rock , Paper or Scissors)

//NOTE - Game conditions
// if p1 wins, return the string "The winner is p1"
// if p2 wins, return the string "The winner is p2"
// if they are the same, then return the string "It's a draw"

function rps(p1, p2) {
    if (p1 === p2) return 'Its a draw'

    else if ( p1 === 'Rock' && p2 === 'Scissors') return 'The winner is p1'
    else if ( p1 === 'Paper' && p2 === 'Rock') return 'The winner is p1'
    else if ( p1 === 'Scissors' && p2 === 'Paper') return 'The winner is p1'

    else  return 'The winner is p2'
}

//console.log(rps('Paper', 'Rock'))


//!SECTION - JavaScript built in functions
function rpsTwo(p1, p2) {

    let obj = {
        Rock: 'Scissors',
        Scissors: 'Paper',
        Paper: 'Rock'
    }
    return p1 === p2 ? "It's a draw" : obj[p1] === p2 ? "The winner is p1" : "The winner is p2"
}
//console.log(rpsTwo('Rock', 'Scissors'))

//!SECTION - JS built in function includes()
// The includes() method of Array instances determines whether an array
// includes a certain value among its entries, returning true or false as appropriate. 
function rpsThree(p1, p2) {
    const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper']
/*
()
*/
    return p1 === p2 ? 'Its a draw' : `The winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`
// backtick is for retrieving info. 
}
console.log(rpsThree('Scissors', 'Paper'))