let arr = []
let books = ["Harry potter", 
"mathiassen : design system", 
"Information System",
];

const colors = ["red", "green", "yellow"];

console.log(books);

let cars = new Array("BMW", "volkwagen", "Toyoya");

console.log(cars);

console.log(books[2]);

books.push("Kriptografi - Janner Simamarta"); // ini index ke - 3

console.log(books);

books[3] = "Kriptografi - Janner Simamarta, Sriadhi";
books[books.length - 1] = "Demi Masa - Malik al mughis"; // push, ini index ke - 3 juga
books[8] = "Belajar Otodidak Flask - Budi Raharjo";
books[10] = "fun with Kotlin";
books[0] = "Pengenalan Sistem Informasi";

console.log(books);

colors[2] = "blue"; // bukan mendefinisikan ulang, tapi merubah bagian dari array (mutable)

console.log(colors);

// colors = []; // ini mendefinisikan ulang

// console.log(colors);