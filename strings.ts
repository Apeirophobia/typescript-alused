let s1 = "tere";
let s2 = 'tere';
let s3 = `tere`;

let newString = s1 + s2 + "headaega" // string addition

if (s1 === s2) { // STRICT COMPARSION (datatype and value should be same)
    console.log("strings are the same");
};

let s4 = "abcdeee";

if (s3 < s4) { // string length comparsion
    console.log("s3 < s4");
};

console.log(s4.length) // string.length returns string length

//let newString = "I would like to leave this lesson";

console.log(newString.substring(4)); // start after 4 character
console.log(newString.substring(0, 4)); // start at 0 end at 4
console.log(newString.substring(4, 8)); // start at 4 end at 8
console.log(newString.substring(newString.length - 4)); // start at 8

console.log(newString.toUpperCase()); // retunrs uppercase
console.log(newString.toLowerCase()); // returns lowercase