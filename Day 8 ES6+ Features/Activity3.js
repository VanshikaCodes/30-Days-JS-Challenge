// let arr = [1,2,3,4,5,6,7,8]
// let  b = [...arr, 9, 10 ]

// console.log(arr);
// console.log(b);


// Rest Operator

let func = function (...c) {
    return c.reduce( (a,b) => {
        return a+b
    })
}
console.log(func(1,2,3,45,5));
