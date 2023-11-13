
//use this file for any code you want to try out


// import {scramble} from "./book.js"

// scramble()
// const numbers: any = {
//     one: 1,
//     two: 22,
//     three: 333,
//     four: 444
//    }
   
//    for(const i in numbers){
//        console.log(numbers[i])
//    }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((i, j) => i.name + ' : ' + j)

// console.log( names ); 

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(i => ({fullName:i.name+ " " + i.surname, id:i.id}) )

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith