"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Shreyas", age: 20 }, { name: "Dhruvil", age: 21 });
console.log(age);
