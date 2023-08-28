function hello(n) {
    console.log("n => ", n, "hello");
    if (n > 1) {
        hello(n - 1);
    }

}

hello(5);