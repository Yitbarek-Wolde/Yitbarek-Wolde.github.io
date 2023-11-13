export function doubleNums(arr) {
    return arr.map(num => num * 2);
}
export function doubleAges(arr) {
    return arr.map(num => ({ name: num.name, age: num.age * 2 }));
}
export function filterEven(arr) {
    return arr.filter(value => value % 2 == 0);
}
export function filterOver10(arr) {
    return arr.filter(value => value.age > 10);
}
export function findEvenNum(arr) {
    return arr.find(num => num % 2 == 0);
}
export function findEvenAge(arr) {
    return arr.find(value => value.age % 2 === 0);
}
export function includesEvenNum(arr) {
    return arr;
}
export function includesEvenAge(arr) {
    return arr;
}
