import promptSync from "prompt-sync";
const prompt = promptSync();

const AGE = 18;

let ask_age = Number(prompt("How old are you? "))
while(AGE > ask_age){
    ask_age = Number(prompt("How old are you? "))
}
console.log("Old enough!")

do{
   let new_ask_age = Number(prompt("How old are you? "))
}while(new_ask_age < AGE)
console.log("Old enough! Again!")