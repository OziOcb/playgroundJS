//──── 001 ──────────────────────────────────────────────────────────────────────────────────
console.log('%c Kata 001 ', 'color: red');
/*
https://www.codewars.com/kata/chuck-norris-ii-one-punch/train/javascript

Chuck Norris is the world's toughest man - he once kicked a horse in the chin.
Its descendants today are known as giraffes.

Like his punches, Chuck NEVER needs more than one line of code.

Your task, to please Chuck, is to create a function that chains 4 methods on a SINGLE LINE!
You can pass with multiple lines, but CHuck will pity you. Go big or go home. ONE LINE!!

Chuck expects his list of favourite items to be split, sorted,
joined AND have any occurrences of the letters 'e' and 'a' removed - why, you ask?
Well Nunchuks hasn't got the letters 'a' or 'e' in it has it??
Chuck says shut your mouth... and don't forget the capitals.

If anyone dares to provide Chuck with an empty string, an integer or an array,
just return a description of their face once Chuck finds out: 'Broken!'

Go, go go!!!

*/

// function onePunch(items){} //Don't leave this line!!
const onePunch = i => typeof i === 'string' && i !== '' ? i.split(' ').sort().join(' ').replace(/a|e/gi, '') : 'Broken!'

// TESTS
console.log(onePunch('Beard Knife Grenade Motorbike Hat')) // 'Brd Grnd Ht Knif Motorbik'
console.log(onePunch('Horse Rope Cups Car Beard')) // 'Brd Cr Cups Hors Rop'
console.log(onePunch('Friend Beer Beard Monkey Laptop')) // 'Brd Br Frind Lptop Monky'
console.log(onePunch('')) // 'Brd Br Frind Lptop Monky'
console.log(onePunch([])) // 'Brd Br Frind Lptop Monky'



//──── 002 ──────────────────────────────────────────────────────────────────────────────────
console.log('%c Kata 002 ', 'color: red');
/*
https://www.codewars.com/kata/theyre-good-dogs/train/javascript

Description:
At 'We Rate Dogs', we try our best to give dogs accurate ratings, which will always be above 10/10.
Because they're good dogs.
Over the weekend Bront has come in and hacked our system, lowering the ratings of dogs to below 10/10.
Please help to fix Brant's bad system and give the dogs their original ratings. They're good dogs Brent.

Task:
The function weRateDogs(str, rating) takes a string and an integer as the inputs.
Within the string is an incorrect rating x/y.

You will need to change the incorrect rating x/y to the correct rating rating/10.
The given string may contain numbers and letters, but no special characters other than /.

For example:
if you are given the following string:
'This is Max99. She has one ear that is always s1ightly higher than the other 4/10 wonky af'
And the following rating: 11 return: 'This is Max99.
She has one ear that is always s1ightly heigher than the other 11/10 wonky af'

*/

// ES5
// function weRateDogs(str, rating){
//   return str.replace(/[\d+]\/[\d]+/, rating + '/10')
// }

// ES6
const weRateDogs = (str, rating) => str.replace(/\d\/\d+/, `${rating}/10`)


// TESTS
console.log(weRateDogs('This is Tucker. He would like a hug. 3/10 someone hug him', 11))
// 'This is Tucker. He would like a hug. 11/10 someone hug him', 'Should return a string with updated rating');
console.log(weRateDogs('This is Charlie. He pouts until he gets to go on the swing. 5/10 manipulative af.', 12))
// "This is Charlie. He pouts until he gets to go on the swing. 12/10 manipulative af.", 'Should return a string with updated rating');




//──── 003 ───────────────────────────────────────────────────────────────────────────────
console.log('%c Kata 003 ', 'color: red');
/*

Zalgo text is text that leaks into our plane of existence from a corrupted dimension of Unicode. For example:


H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓

_
Write a function readZalgo that converts a string of Zalgo text into a string interpretable by our mortal eyes.
The string above would be converted into:

Have a great day!
The converted string should only feature
uppercase letters (A to Z),
lowercase letters (a to z),
numbers (0 to 9),
basic punctuation marks (. , ! ?),
and spaces ( ).

*/

// ES5
// function readZalgo(zalgotext) {
//   var reg = /[\w\s\.\?!,]/g
//   var mortaltext = zalgotext.match(reg).join('');
//   return mortaltext;
// }

// ES6
// const readZalgo = zalgotext => zalgotext.match(/[\w\s\.\?!,]/g).join('')

const readZalgo = txt => txt.replace(/[^\w,.!? ]/g, '')



// TESTS
console.log(readZalgo("H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓")) //  "Have a great day!"



//──── 004 ───────────────────────────────────────────────────────────────────────────────
console.log('%c Kata 004 ', 'color: red');
/*

Egg Talk.

Insert an "egg" after each consonant.
If there are no consonants, there will be no eggs.
Argument will consist of a string with only alphabetic characters and possibly some spaces.

eg:

hello => heggeleggleggo

eggs => egegggegg

FUN KATA => FeggUNegg KeggATeggA

////

This Kata is designed for beginners to practice the basics of regular expressions.
With this in mind a little bit of commenting in your solution could be very useful.

Check Eloquent Javascript p176

*/
// ES5
// function heggeleggleggo(word){
//   var reg = /[bcdfghjklmnpqrstvxzwy]/i;
//   var newWord = '';

//   Array.from(word).forEach(function(letter){
//     if (reg.test(letter)){
//       newWord += letter + 'egg'
//     } else {
//       newWord += letter
//     }
//   })

//   return newWord
// }

// ES6
// const heggeleggleggo = word => [...word].map( letter => /[bcdfghjklmnpqrstvxzwy]/i.test(letter) ? `${letter}egg` : letter).join('')

// Very short
let heggeleggleggo = w => w.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "$&egg")


// TESTS
console.log(heggeleggleggo("hello")) //"heggeleggleggo"
console.log(heggeleggleggo("code here")) //"ceggodegge heggeregge"
console.log(heggeleggleggo("egg")) //"egegggegg"


//──── 005 ───────────────────────────────────────────────────────────────────────────────
console.log('%c Kata 005 ', 'color: red');
/*

It's Friday night, and Chuck is bored.
He's already run 1,000 miles, stopping only to eat a family sized bag of Heatwave Doritos
and a large fistful of M&Ms. He just can't stop thinking about kicking something!

There is only one thing for it,
Chuck heads down to his local MMA gym and immediately challenges every fighter
there to get in the cage and try and take him down... AT THE SAME TIME!

You are provided an array of strings that represent the cage and Chuck's opponents.
Your task, in traditional Chuck style, is to take their heads off!! Throw punches, kicks,
headbutts (or more likely - regex or iteration...) but whatever you do, remove their heads.
Return the same array of strings, but with the heads ('O') removed and replaced with a space (' ').

If the provided array is empty, or is an empty string, return 'Gym is empty'.
If you are given an array of numbers, return 'This isn't the gym!!'.

FIGHT!!

Original design of this kata was a much more beautiful thing - the test cases illustrate the idea,
and the intended output.
I am unable to make the actual output go over multiple lines so for now at least you will have to
imagine the beauty!

*/
// ES5
// function headSmash(array) {
//   var reg = /O/gm
// }

// ES6
const headSmash = arr => {
  const reg = /O/g
  let newArr = ''

  if (arr === '' || arr.length === 0){
    newArr = "Gym is empty"
  } else if (typeof arr === "number"){
    newArr = "This isn't the gym!!"
  } else {
    newArr = arr.map(str => str.replace(reg, ' '));
  }

  return newArr
}




// TESTS
console.log(headSmash('')) // 'This isn\'t the gym!!');
console.log(headSmash([])) // 'This isn\'t the gym!!');
console.log(headSmash(8764646)) // 'This isn\'t the gym!!');

console.log(headSmash(
[
'*****************************************',
'**  _O_   *   _O_   *   _O_   *   _O_  **',
'** C(.)J  *  /(.)J  *  /(.)J  *  C(.)J **',
'** _/ |_  *  _| |_  *  _( )_  *  _/ )_ *']))

console.log(headSmash(
[
'***  _O_   **   _O_   **   _O_   **   _O_  ***',
'*** /(.)J  **  C(.)J  **  /(.)J  **  /(.)J ***',
'*** _| |_  **  _| |_  **  _( )_  **  _/ |_ **']))

console.log(headSmash(
[
'*****************************************',
'***********   _O_   *   _O_   ***********',
'**  _O_   *  /(.)J  *  /(.)J  *   _O_  **',
'** /(.)J  *  _| |_  *  _( )_  *  /(.)J **',
'** _( )_  *********************  _( )_ **',
'******************* X ******************']))

console.log(headSmash(
[
'*****************************************',
'***********   _O_   *   _O_   ***********',
'**  _O_   *  C(.)J  *  /(.)J  *   _O_  **',
'** /(.)J  *  _| |_  *  _/ )_  *  C(.)J **',
'** _/ )_  *********************  _/ |_ **',
'******************* X *******************',
'**********************  _O_  ************',
'**  _O_   *   _O_   *  /(.)J  *   _O_  **',
'** /(.)J  *  C(.)J  *  _/ )_  *  C(.)J **',
'** _( )_  *  _| |_  ***********  _/ |_ **',
'****************************************']))




