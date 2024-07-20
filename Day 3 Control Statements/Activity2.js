let a = 34
let b = 40
let c = 400

if(a>b) {
    if(a>c){
        console.log(`${a} is largest`);
    }
    else {
        console.log(`${c} is largest`);
    }
}
else if (b > c) {
    if(b>a){
        console.log(`${b} is largest`);
    }
    else {
        console.log(`${a} is largest`);
    }
}
else {
    console.log(`${c} is largest`);
}