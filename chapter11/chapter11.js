let people = [
  "Kareem",
  "Fatma",
  "Sumaya",
  "Mr. Hobson",
  "Ms. Young",
  "Sumaya",
  "Mrs. O' Doherty",
];
let otherPeople = ["Emilie", "Mommy", "Dad", "Kathy"];

// toString() and valueOf() do the same thing to arrays.

//people[0] = "Georgie";

//document.getElementById("peopleIKnow").innerHTML = otherPeople.toString();

// concatinating 2 arrays
//people = people.concat(otherPeople);

// The indexOf() array method looks for a value among an array’s elements and returns the position of that array.
//people = people.indexOf("Sumaya");


// join() array method
//people = people.join(" # ");

// The lastIndexOf() array method tells you the last array element that contains the specified value.
//people = people.lastIndexOf("Sumaya");

// The pop() array method removes the last element in an array and returns that element.
//people.pop();


/* The push() array method adds an element, or elements, to the
end of an array and returns the new number of elements of the
array (in other words, its length). */

// people = people.push("Teddy");


/* The reverse() method flips your array over. What was the first
element becomes the last, what was the last becomes the first,
and everything in between reverses, too.*/

//people = people.reverse();


//The shift() method removes the first element from the array.
//people.shift();


// unshift() adds an element to the beginning of an array.
//people.unshift("Tyson");


//The slice() method lets you pick certain elements from your array to create a new array.
 //people = people.slice(0,4);


// The sort() method sorts the elements in an array alphabetically.
//people = people.sort();

// The splice() method lets you add or remove elements at certain positions.
people.splice(1,0,"Cathy");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();