// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 calls the function inside counterMaker and uses a block scope. counter2 uses global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 uses a closure, it has access to the count variable
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 takes up less memory and would be
 * preferable if count only needs to be accesssed by one function. counter2 takes less code.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
};

const counter1 = counterMaker();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// counter2 code
let count = 0;

function counter2() {
  return count++;
}
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  const randNum = Math.floor(Math.random() * 3);
  return randNum;

    /*Code Here*/

}
console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore( callback , innings){
  let score = [];
    function scoreCount () {
      for (let index = 0; index < innings; index++) {
        score.push(callback());
      };
      let final = score.reduce( (acc, cur) => acc + cur );
      return final;
    }
    
    
  let homeScore =scoreCount();
  let awayScore = scoreCount();

  
  console.log(`Home: ${homeScore}`);
  console.log(`Away: ${awayScore} `);
  return finalScore;

  /*Code Here*/

}
finalScore(inning, 9);
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore , inning , numOfInning) {
  /* CODE HERE */
      let homeTeam = inning;
      let awayTeam = inning;
      getInningScore = `awayTeam:${awayTeam} - homeTeam:${homeTeam}`;
      for (let index = 0; index < numOfInning; index++) {
        console.log(getInningScore);
      }
      

  };
scoreboard(' 1st', inning(), 9);


