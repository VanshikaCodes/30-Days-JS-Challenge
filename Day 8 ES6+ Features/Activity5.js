let obj = {
    title : "Think And Grow Rich",
    author : "Napolean Hill",
    publish : 1790,
    greeting() {
        console.log(`Helloooo, ${author}`);
    },
    genre : 'Self-help'
}

console.log(obj);

const Name1 = "firstName"; //task-9
const Name2 = "lastName";

const person = {
  [Name1]: "John",
  [Name2]: "Doe",
  age: 30
};

console.log(person);