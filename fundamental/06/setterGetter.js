let car = {
    merk:"bmw",
    hello:function() {
        console.log(this.merk);
    },
}

console.log(car.merk);
car.hello();

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

    person.fullName = "Gustavo";
    console.log(person.name);
    console.log(person.fullName);