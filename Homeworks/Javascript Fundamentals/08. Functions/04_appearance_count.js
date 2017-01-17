function timesChecker(args) {
    let arraySize = +args[0];
    let arr = args[1].split(' ');
    let lastNum = +args[2];

    console.log(countSolver(lastNum));

    function countSolver(n) {
        counter = 0;
        for (let i = 0; i < arraySize; i++) {
            if (+arr[i] === lastNum) {
                counter++;
            }
        }
        return counter;
    }
}

timesChecker(['8', '28 6 21 6 -7856 73 73 -56', '73']);
