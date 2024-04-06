let a = prompt("Enter your first Number");
let b = prompt("Enter your second Number");
let c = prompt("Enter operaiton");

let random= Math.random();
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}


console.log(random)
if(random > 0.1){
   
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}