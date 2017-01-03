function circle(args) {
    let x = +args[0],
        y = +args[1],
        result,
        radius = Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));

    if (radius <= 1.5) {
        result = "inside circle";
    } else {
        result = "outside circle";
    }

    if ((x >= -1 && x <= 5) && (y <= 1 && y >= -1)) {
        result += " inside rectangle";
    } else {
        result += " outside rectangle";
    }
    console.log(result);

}

circle(['2.5', '2']);
circle(['0', '1']);
circle(['2.5', '1']);
circle(['1', '2']);
