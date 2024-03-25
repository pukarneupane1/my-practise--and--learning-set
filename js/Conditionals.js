console.log("i am pukar and i am learning conditional in javascript")

let age = 3;
let pukar = 2;

age += pukar ;

console.log("age =", age);

console.log(age + pukar);
console.log(age - pukar);
console.log(age * pukar);
console.log(age / pukar);
console.log(age ** pukar); /* it is calculated as 3 ko power 2 */
console.log(age % pukar); /* basically it is used to claculate remainder */

if((age-pukar)>18){
    console.log("you are eligible to vote");

}

else{
    console.log("you are not eligible to vote");
}

// if else if else ladder

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
this
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = b - a;
}

*/