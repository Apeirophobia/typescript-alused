// conditionals

if (true) { // condition
    // action
}
else if (false) { // if main condition is false; secondary condition
    // action
}
else {
    // if all conditions are false; action
}

const month: number = 3;
let month_name: string;

switch (month) {
    case 1:
        month_name = "january"
        break;

    case 2:
        month_name = "february"
        break;

    case 9:
        month_name = "september"
        break;

    default:
        month_name = "undefined"
        break;
}

console.log(month_name);

if (3 % 2 == 1) console.log("Yes");

let oddEvenBool = 3 % 2 == 1 ? "even" : "odd";

console.log(oddEvenBool);

// logical operators

// || or
// && and
// != NOT
// !variable = undefined value