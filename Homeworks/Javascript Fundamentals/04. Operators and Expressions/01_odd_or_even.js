function oddOrEven(array) {
    var num = +array[0];

    if (num % 2 == 0) {
        console.log("even " + num);
    } else {
        console.log("odd " + num);
    }
}

oddOrEven(['3']);
oddOrEven(['2']);
oddOrEven(['-2']);
oddOrEven(['-1']);
oddOrEven(['0']);
