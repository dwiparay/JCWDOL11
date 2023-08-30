let person = {
    name: "Raymond",
    age: 28,
    "personal-info":"web developer",
    hobbies:["Mobile Legends", "Valorant"],
    address:{
        city:"Jakarta",
        houseNumber: 29,
    },
    // setter
    set fullName(name) {
        this.name = name;
    },
    get fullName() {
        return "Dwipa " + this.name;
    },
    greeting() {
        console.log("hello stranger");
    },
    walk:() => {},
    };

// let person2 = Object.assign({},person); // passing by value
// let person2 = person; // passing by reference
//let person2 = Object.create(person); // passing by value
let person2 = Object.freeze(person);

console.log(person2);

person2.name = "Rian";

console.log(person2.name);