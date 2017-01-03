function exchangeIfGreater(input) {
    var a = +input[0];
    var b = +input[1];
    var c = 0;
    if (a > b) {
        c = b;
        b = a;
        a = c;
    }
    console.log(a + " " + b);
}

exchangeIfGreater(['5', '2']);
exchangeIfGreater(['3', '4']);
exchangeIfGreater(['5.5', '4.5']);
