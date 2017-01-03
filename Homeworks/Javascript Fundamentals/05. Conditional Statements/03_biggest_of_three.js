function biggest(input) {
    var a = +input[0];
    var b = +input[1];
    var c = +input[2];
    if (a > b && a > c) {
        console.log(a);
    } else if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

biggest(['5', '2', '2']);
biggest(['-2', '-2', '1']);
biggest(['-2', '4', '3']);
biggest(['0', '-2.5', '5']);
biggest(['-0.1', '-0.5', '-1.1']);
