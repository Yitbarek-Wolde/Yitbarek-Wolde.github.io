
export { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues }

function sumTo(n: number): number {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function factorial(n: number): number {
    if (n < 1)
        return 1
    else
        return n * factorial(n - 1);
}

function fibonacci(n: number): number {
    if (n <= 1)
        return n
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

function outputList(list: TreeNode): string {
    if (list.next === null) {
        console.log(list.value)
        console.log('printed to console')
        return 'printed to console'
    }
    else {
        console.log(list.value)
        return outputList(list.next)
    }
}

function outputListLoop(list: TreeNode): string {
    if (list.next === null) {
        console.log(list.value)
        return 'printed to console'
    }
    else {
        let reverseIt = outputList(list.next)
        console.log(list.value)
        return reverseIt
    }
}

function  reverseList(list: TreeNode): string {
    if (list.next === null) {
        console.log(list.value)
        return 'printed to console'
    }
    else {
        let reverseIt = outputList(list.next)
        console.log(list.value)
        return reverseIt
    }
}
type TreeNode = {
    value: number;
    next: TreeNode | null;
}