let arr= [1,2,5666,4,78]

arr.pop()
arr.push(23)
arr.shift()
arr.unshift(23)
for (const key in arr) {
    console.log(arr[key]);
}