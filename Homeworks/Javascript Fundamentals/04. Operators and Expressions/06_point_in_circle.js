function circle(args) {
    let x = +args[0],
        y = +args[1],
        radius = 2,
        result;

    result = Math.sqrt((x - 0) * (x - 0) + (y - 0) * (y - 0)).toFixed(2);

    if (result < radius) {
        console.log("yes " + result);
    } else {
        console.log("no " + result);
    }

}

circle(['-2', '0']);
circle(['-1', '2']);
circle(['1.5', '-1']);
circle(['-1.5', '-1.5']);
circle(['100', '-30']);
circle(['0', '0']);
circle(['0.2', '-0.8']);
circle(['0.9', '-1.93']);
circle(['1', '1.655']);
circle(['0', '1']);
