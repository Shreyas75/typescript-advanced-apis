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