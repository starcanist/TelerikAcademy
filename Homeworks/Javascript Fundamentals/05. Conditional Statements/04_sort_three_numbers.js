function sortThree(input) {
    var a = +input[0];
    var b = +input[1];
    var c = +input[2];
    if (a >= b && a >= c) {
        if (b >= c)
            console.log(a + " " + b + " " + c);
        else {
            console.log(a + " " + c + " " + b);
        }
    } else if (b > c && b > a) {
        if (a > c) {
            console.log(b + " " + a + " " + c);
        } else {
            console.log(b + " " + c + " " + a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            console.log(c + " " + a + " " + b);
        } else {
            console.log(c + " " + b + " " + a);
        }
    }
}

sortThree(['-2', '-2', '1']);
sortThree(['-2', '4', '3']);
sortThree(['0', '-2.5', '5']);
sortThree(['-1.1', '-0.5', '-0.1']);
sortThree(['10', '20', '30']);
sortThree(['1', '1', '1']);
