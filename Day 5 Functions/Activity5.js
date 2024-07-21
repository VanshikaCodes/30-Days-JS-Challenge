// function firstFunc(func, num) {
//     for (let index = 1; index <= num; index++) {
//         console.log(func(), index);
//     }
// }

// function func() {
//     return "Hello"
// }

// firstFunc(func, 5)

function func1(value) {
    return `Function 1's value : ${value}`
}

function func2(value) {
    return `Function 2's value : ${value}`
}

function higher_order_function(func1, func2, value) {
    console.log(func1(value), func2(value));
}

higher_order_function(func1, func2, 67)