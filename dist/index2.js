"use strict";
//read only
const user = {
    name: "Shreyas",
    age: 25,
};
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
const userss = {
    "ras@asd": { age: 21, name: "Shreyas" },
    "shrey@as": { age: 22, name: "brian" }
};
// Map is a js concept
const newUsers = new Map();
newUsers.set("ras@asd", { age: 21, name: "Shreyas", email: "ras@asd" });
newUsers.set("shrey@as", { age: 22, name: "brian", email: "shrey@as" });
const newuser = newUsers.get("ras@asd");
console.log(newuser);
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click'); // OK
// handleEvent('scroll'); // NOT-OK
