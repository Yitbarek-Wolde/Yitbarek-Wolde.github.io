
/**
 *@returns {number} double the input
 */
export function double(num: number): number {
  return num * 2;
}


/**
 * @returns {number} 100 times the input
 */
export function times100(num: number): number {
  return num * 100
}


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr: number[], myfun: any): number[] {
  const newarr = []
  for (const nums of arr) {
    newarr.push(myfun(nums))
  }
  return newarr;
}





