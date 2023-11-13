
export type Person = {
    name: string,
    age: number
}

export function doubleNums(arr:number[]):number[]{
return arr.map(num => num * 2);
}

export function doubleAges(arr:Person[]):Person[]{
return arr.map(num => ({name: num.name, age: num.age * 2}))
}

export function filterEven(arr:number[]):number[]{
return arr.filter(value => value % 2 == 0)
}

export function filterOver10(arr:Person[]):Person[]{
return arr.filter(value => value.age > 10)
}

export function findEvenNum(arr:number[]):any{
    return arr.find(num => num % 2 == 0)
}

export function findEvenAge(arr:Person[]):any{
    return arr.find(value => value.age % 2 === 0)

}

export function includesEvenNum(arr:boolean):boolean{
return arr
}

export function includesEvenAge(arr:boolean):boolean{
return arr
}


