const user1 ={
 FirstName:"abdullah", LastName:"alokosh", major:"manegar"
}
const user2 ={
 carType:"bmw", category:"M5", HoursPwoer:"970"
}
const user3 ={
 education:"swe", nationalty:"joranian", soctial:"single"
}
user1.age=22;
console.log(user1);
let user4=Object.create(user1)
console.log(user4);
// let user5=Object.assign(user1, user2,user3)
// console.log(user5);


user1.ss=55;
console.log(user1);
// let user4=Object.create(user1)
// console.log(user4);

// user1.age=22;
// console.log(user1);
let a="abd"
console.log(a.slice(0,2));