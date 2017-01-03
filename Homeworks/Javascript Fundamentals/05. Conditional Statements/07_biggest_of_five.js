function biggestOfFive(array) {
    var a = +array[0],
        b = +array[1],
        c = +array[2],
        d = +array[3],
        e = +array[4];

    if (a > b && a > c && a > d && a > e) {
        console.log(a);
    } else if (b > c && b > d && b > e) {
        console.log(b);
    } else if (c > d && c > e) {
        console.log(c);
    } else if (d > e) {
        console.log(d);
    } else {
        console.log(e);
    }
}

biggestOfFive(['5', '2', '2', '4', '1']);
biggestOfFive(['-2', '-22', '1', '0', '0']);
biggestOfFive(['-2', '4', '3', '2', '0']);
biggestOfFive(['0', '-2.5', '0', '5', '5']);
biggestOfFive(['-3', '-0.5', '-1.1', '-2', '-0.1']);
