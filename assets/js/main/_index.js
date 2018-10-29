//────  ──────────────────────────────────────────────────────────────────────────────────
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