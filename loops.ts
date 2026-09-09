// loops


// for loop
for (let index = 0; index < 10; index ++) {
    console.log(index);
}

// while loop

let i: number = 0;

while (i < 10) {
    i++
    console.log(i);
};

// elementide logimine
const thisArray =[1,3,5,7,9];
for (let index = 0; index < thisArray.length; index++) {
    console.log(thisArray[index]);
}

// foreach

for (let element of thisArray) {
    console.log(element);
}

// even number sum
let paarisSumma = 0;
for (let ii = 0; ii < 10; ii++) {
    if (ii % 2 == 0) {
        paarisSumma += 11;
    }
}

const arvuArray = [1,2,3,4,5,6,7,8,9,10];
let paarisSumma2 = arvuArray
.filter(nr => nr % 2 == 0);

console.log(paarisSumma2)

// sorteerimine

const mingidElemendid = [3,3,2,2,4,5,7,9,9]
const  result: number[] = [];

for (let numba of mingidElemendid) {
    if (!result.includes(numba)) {
        result.push(numba);
    }
}

console.log(result.sort((aaaa, bbbb) => aaaa-bbbb));

const uninaaklsedArvud = new Set(mingidElemendid);
const unikaalneArray = Array.from(uninaaklsedArvud);
console.log(unikaalneArray.sort((aaaa, bbbb) => aaaa-bbbb));