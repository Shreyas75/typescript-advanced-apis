//read only

type User2 = {
    readonly name: string,
    readonly age: number
}

const user: Readonly<User2> = {
    name: "Shreyas",
    age: 25,
}


// user.age = 12;


interface UserB {
    id: string;
    name: string;
}
    
    
type UsersB = { [key: string]: UserB };
    
const users: UsersB = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

// Instead of this use Records and Map

// interface UserAge {
//     id: string;
//     name: string;
// }
type UsersC = Record<string, {age: number, name: string}>

const userss: UsersC = {
    "ras@asd": {age: 21, name: "Shreyas"},
    "shrey@as": {age: 22, name: "brian"}
} 


type UserONE = {
    name: string;
    age: number;
    email: string;
}

// Map is a js concept
const newUsers = new Map<string, UserONE>()

newUsers.set("ras@asd", {age: 21, name: "Shreyas", email: "ras@asd"})
newUsers.set("shrey@as", {age: 22, name: "brian",  email: "shrey@as"})

const newuser = newUsers.get("ras@asd")
console.log(newuser);
