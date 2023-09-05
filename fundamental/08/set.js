const numbers = [1, 2, 3, 2, 4, 5];

const newNumber = new Set(numbers);

console.log(newNumber);

const people = ["Raymond", "Dwipa", "Gustavo", "dwipa", "Maria", "Raymond", "Wuling", "Dwipa"];

const newPeople = new Set(people);

newPeople.add("Topan");
newPeople.add("Raymond");
newPeople.add("raymond");

console.log(newPeople.has("raymond"));

//newPeople.clear();

console.log(newPeople);

//const goodPeople = [
//    {
  //      name: "Raymond",
    //    age: 28,
   // },
   // {
     //   name: "Galih",
       // age: 18,
   // },
    //{
      //  name: "Ratna",
       // age: 19,
    //},
    //{
      //  name: "galih",
       // age: 18,
    //},
    //{
      //  name: "Susan",
       // age: 30,
    //},
//];

//const newGoodPeople = new Set(goodPeople)

//console.log(newGoodPeople);