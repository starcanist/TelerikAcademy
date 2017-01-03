function quad(input) {
    var a = +input[0];
    var b = +input[1];
    var c = +input[2];
    var root = (Math.pow(b, 2) - (4 * a * c));
    var x1 = (-b - Math.sqrt(root)) / (2 * a);
    var x2 = (-b + Math.sqrt(root)) / (2 * a);

    if (x1 > x2) {
        var temp = x1;
        x1 = x2;
        x2 = temp;
    }

    if (root < 0) {
        console.log("no real roots");
    } else if (root == 0) {
        console.log("x1=x2=" + x1.toFixed(2));
    } else {
        console.log("x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
    }

}

quad(['2', '5', '-3']);
quad(['-1', '3', '0']);
quad(['-0.5', '4', '-8']);
quad(['5', '2', '8']);
quad(['0.2', '9.572', '0.2']);
