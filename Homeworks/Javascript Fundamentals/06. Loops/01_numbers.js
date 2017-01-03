function numbers(input) {
    var n = +input[0];
    var counter = "";

    for (var index = 1; index <= n; index++) {
        counter += index + " ";
    }

    console.log(counter);

}

numbers(['5']);
numbers(['1']);
