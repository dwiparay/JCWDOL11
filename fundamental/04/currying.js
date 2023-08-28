function multiplier(factor) {
 //   return number * factor;
    return function (number) {
        return number * factor;
    };
}
// multiplier(5,3)
// multiplier(5)(3)
console.log(multiplier(6)(4));
console.log(multiplier(5)(3));

console.log(1, 3, 4);