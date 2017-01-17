function largerThanNeighbor(args) {
    let len = +args[0];
    let arr = args[1].split(' ');

    console.log(larger(arr));

    function larger(gancho) {
        let counter = 0;
        for (let i = 0; i < len - 1; i++) {
            if ((+arr[i] > +arr[i - 1]) && (+arr[i] > +arr[i + 1])) {
                counter++;
            }
        }

        return counter;
    }
}

largerThanNeighbor(['6', '-26 -25 -28 31 2 27']);
largerThanNeighbor(['10', '23 12 33 -26 -25 -28 31 2 12 -4']);
