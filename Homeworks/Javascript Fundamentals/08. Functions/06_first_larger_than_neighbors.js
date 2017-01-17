function firstLarger(args) {
    let len = +args[0];
    let arr = args[1].split(' ');

    console.log(indexOfLarger(arr))
    console.log(arr)

    function indexOfLarger() {
        for (let i = 0; i < len - 1; i++) {
            if ((+arr[i] > +arr[i + 1]) && (+arr[i] > +arr[i - 1])) {
                return i;
            }
        }
    }
}

firstLarger(['6', '-26 -25 -28 31 2 27']);
