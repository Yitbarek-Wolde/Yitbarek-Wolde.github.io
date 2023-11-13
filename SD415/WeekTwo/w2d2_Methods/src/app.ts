//write any code you want to test here and run with npm run app

const years: number = 4500; // 4500 years
const birth: number = 9;
let growth: number = 3; //first kids
let agelimit: number = 630; //52 years
let counter: number = 0;
let totalgrowth: number = 0
// for (let i = 0; i < months;) {
//     growth = growth * 2
//     if (counter == agelimit) {
//         if (totalgrowth == 0) {
//             console.log(growth + " if before change ")
//             totalgrowth = growth
//             console.log("growth " + growth + " if after change " + " total " + totalgrowth)
//         }
//         else {
//            console.log(" growth ", growth = growth - totalgrowth)
//             totalgrowth = 0
//             console.log(growth + " else ")
//         }
//         counter = 0;
//     }
//     if (growth == Infinity)
//         break;
//     console.log(growth)
//     console.log(i)
//     i += birth
//     counter += birth
// }

for (let i = 0; i < years;) {
    growth = growth * 2;

    if (counter == agelimit) {
        if (totalgrowth == 0) {
            totalgrowth = growth;
        }
        else {
            growth = growth - totalgrowth;
            totalgrowth = 0;
        }
        counter = 0;
    }

    if (growth == Infinity) {
        break;
    }

    if (counter % (agelimit * birth) == 0) {
        growth -= totalgrowth;
        totalgrowth = 0;
    }

    i += 1;
    counter += 1;
}

const population = Math.round(growth);

console.log(`The population after ${years} years is approximately ${population}.`);