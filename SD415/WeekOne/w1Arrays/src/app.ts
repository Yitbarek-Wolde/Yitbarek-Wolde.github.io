

console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a: number, b: number, c: number): number {
    if (a > b && a > c)
        return a
    else if (a < b && b > c)
        return b
    else if (c > a && c > b)
        return c
    else if (a === b && a > c)
        return a
    else
        return c  //IMPLEMENT THIS -- DO NOT USE MATH.MAX
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number {
    let added: number = 0
    for (const num of arr)
        added += num
    return added;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr: number[]): number {
    let mult: number = 1
    for (const num of arr)
        mult *= num
    return mult;


}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words 
 * @returns {number} length of longest word
 */
export function findLongestWord(arr: string[]): number {
    let longest: number = 0
    for (const longWord of arr) {
        if (longWord.length > longest)
            longest = longWord.length
    }
    return longest;
}

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 * 
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows: number, columns: number): number[][] {
    const result: number[][] = [];
    let counter = 1;

    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < columns; j++) {
            row.push(counter);
            counter++;
        }
        result.push(row);
    }

    return result;
}

export function reverseArray(arr: any[]): any[] {
    const reversedArr: any[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

export function reverseArrayInPlace(arr: any[]): any[] {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

export function scoreExams(studentAnswers: number[][], correctAnswers: number[]): number[] {
    const scores: number[] = [];

    for (const student of studentAnswers) {
        let score = 0;
        for (let i = 0; i < student.length; i++) {
            if (student[i] === correctAnswers[i]) {
                score++;
            }
        }
        scores.push(score);
    }

    return scores;
}