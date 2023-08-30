let person = {
    name: "Raymond",
    age: 28,
    "personal-info":"web developer",
    hobbies:["Mobile Legends", "Valorant"],
    address:{
        city:"Jakarta",
        houseNumber: 29,
    },
    run: function() {
        console.log("this person is running");
    },
    greeting() {
        console.log("hello stranger");
    },
    walk:() => {

    }
};

console.log(person);

console.log(person.address.street);
console.log(person.address.street?.number);

// person.address.street ? person.address.street.number 


//console.log(person.age);
//console.log(person.hobbies[1]);
//console.log(person["name"]);
//console.log(person["personal-info"]);

//person.address.kecamatan = "pancoran mas";

//person.name = "Raymond Dwipa";

//person.title = "Best Developer";
//delete person["personal-info"];

//console.log(person);

//person.run();

//person.greeting();


console.log(Object.keys(person));

for(let itemKey in person) {
    console.log(itemKey, " : ", person[itemKey]);
}