let arr= [1,2,3,4,5]

// // Map
// let arr1 = arr.map( (num)=> {
//     return num*2
// } )

// for (const key in arr1) {
//     console.log(arr1[key]);
// }

// // Filter 
// let arr2 = arr.filter( (num) => {
//     if(num%2 == 0) return num
// } )

// for (const key in arr2) {
//     console.log(arr2[key]);
// }

// Reduce
let arr3 = arr.reduce( (a, b) => {
    return a +b
})

console.log(arr3)