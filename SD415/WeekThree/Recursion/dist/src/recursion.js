export function sumTo(n) {
    if (n == 1)
        return 1;
    return n + sumTo(n - 1);
}
export function factorial(n) {
    if (n < 1)
        return 1;
    else
        return n * factorial(n - 1);
}
export function fibonacci(n) {
    if (n <= 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}
export function outputList(list) {
    if (list.next === null) {
        return list.value + ' printed to console';
    }
    else {
        return list.value + ' ' + outputList(list.next);
    }
}
export function outputListLoop(list) {
    let arr = [];
    let node = list;
    while (node) {
        arr.push(node.value);
        node = node.next;
    }
    let result = '';
    for (let i = 0; i <= arr.length - 1; i++) {
        result += arr[i] + ' ';
    }
    return result + 'printed to console';
}
export function reverseList(list) {
    if (list.next === null) {
        return `${list.value}`;
    }
    else {
        if (list.value != 1) {
            let result = reverseList(list.next) + ' ' + list.value;
            return result;
        }
        else {
            let result = reverseList(list.next) + ' ' + list.value + ' printed to console';
            return result;
        }
    }
}
// export function reverseList(list: TreeNode): string {
//     if (list.next === null) {
//         return  "printed to console " +list.value 
//     } else {
//         let a = reverseList(list.next)+ ' ' + list.value;
//         return a + ' printed to console'
//     }
// }
export function reverseListLoop(list) {
    let arr = [];
    let node = list;
    while (node) {
        arr.push(node.value);
        node = node.next;
    }
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i] + ' ';
    }
    return result + 'printed to console';
}
export function sumTreeValues(list) {
    let add = 0;
    if (list.right === null && list.left === null) {
        return add += list.value;
    }
    else if (list.right === null && list.left != null) {
        return add += list.value + sumTreeValues(list.left);
    }
    else if (list.left === null && list.right != null) {
        return add += list.value + sumTreeValues(list.right);
    }
    else {
        add += list.value + sumTreeValues(list.left) + sumTreeValues(list.right);
        return add;
    }
}
