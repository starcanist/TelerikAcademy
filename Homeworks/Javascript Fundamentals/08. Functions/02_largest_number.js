function largestNumber(args) {
    var arr = args[0].split(' '),
        result = Math.max(args);

    function getMax(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    console.log(getMax(+arr[0], getMax(+arr[1], +arr[2])));
}

largestNumber(['8 3 6']);
largestNumber(['7 19 19']);
