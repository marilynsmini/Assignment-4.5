const name = "Marilyn";
const kidCount = 4;

console.log(`My name is ${name} and I have ${kidCount} kids.`);

if(kidCount > 3){
    console.log("Wow! You have a lot of kids!");
    }
else if(kidCount < 3){
    console.log("You've got some catching up to do!");
}


let proceed = "red";
let message = ""
 
switch (proceed) {
    case "red":
        message = "No more kids for me!";
        break;
    case "yellow":
        message = "Maybe just one more.";
        break;
    case "green":
        message = "Let's have at least one more!";
        break;
    default:
        message = "You broke it.";
}
 
console.log(message)


const str1 = "Isaac, Isaiah, Isabelle, Isen";
const str2 = "The middle children are";
const str3 = str1.slice(1, 8);
const str4 = str1.slice(7, 23);
const str5 = str1.slice(12);
const str6 = str1.slice(30);
console.log(str2, str4);

let num = 57 - "Isen";
console.log(num);

