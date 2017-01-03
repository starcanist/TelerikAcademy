function matrix(array) {
    var a = +array[0];
    var resultLine = "";

    for (var i = 1; i <= a; i++) {
        for (var j = i; j <= i + a - 1; j++) {
            resultLine += j + " ";
        }
        resultLine += "\n";
    }

    console.log(resultLine);

}

matrix(['2']);
matrix(['3']);
matrix(['4']);
