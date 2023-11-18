/**
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 */
export function inArray(arr: number[]): (num: number) => boolean {
    return (num: number): boolean => arr.includes(num);
  }
  
  /**
   * @param {number} low is bottom of range
   * @param {number}  high is top of range
   * @returns {Function} returns a function that tests whether its argument is inside the range
   */
  export function inBetween(low: number, high: number): (num: number) => boolean {
    return (num: number): boolean => {
      return num >= low && num <= high;
    };
  }
  
  /**
   * @returns {Function} closure that returns it's number
   */
  export function makeArmy(): (() => number)[] {
    return [...Array(10)].map((_, i) => () => i);
  }