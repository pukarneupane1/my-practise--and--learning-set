console.log("i am pukar and i am learning loops in javascript")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}


let obj = {
    name: "pukar",
    role: "Programmer",
    company: "pukars AI"
}


for (const key in obj) {
    let element = obj[key];
    console.log(key, element)
}

for (const c of "pukar") {
    console.log(c)
}

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);