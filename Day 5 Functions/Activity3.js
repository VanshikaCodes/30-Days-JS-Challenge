let num1 = 12
let num2 = 34

let sum = (a, b) => {
    return a + b
}

console.log(sum(num1, num2));

let check = (str, char) => {
    for (let index = 0; index < str.length; index++) {
        if(str[index] === char) return true
    }
    return false
}

console.log(check("Hello", 'y'));