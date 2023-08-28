function greeting() {
    var name = "raymond"
    function welcome() {
        return "Welcome " + name;
    }

    function hello() {
        return "hello";
    }

    return welcome() + " and " + hello();
}

console.log(greeting());