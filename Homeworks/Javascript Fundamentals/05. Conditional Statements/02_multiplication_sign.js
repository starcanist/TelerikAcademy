function multiply(input) {
    var a = +input[0];
    var b = +input[1];
    var c = +input[2];
    if (a * b * c > 0) {
        console.log("+");
    } else if (a * b * c < 0) {
        console.log("-")
    } else {
        console.log("0")
    }

}

multiply(['5', '2', '2']);
multiply(['-2', '-2', '1']);
multiply(['-2', '4', '3']);
multiply(['0', '-2.5', '4']);
multiply(['-1', '-0.5', '-5.1']);
