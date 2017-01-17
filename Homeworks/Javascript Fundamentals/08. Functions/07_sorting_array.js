function sortingArray(args) {
    let len = +args[0];
    let arr = args[1].split(' ');
    let sorted = max(arr).join(' ');

    console.log(sorted);

    function max(array) {
        array.sort(function(a, b) {
            return a - b;
        });
        return array;
    }
}

sortingArray(['6', '3 4 1 5 2 6']);
sortingArray(['10', '36 10 1 34 28 38 31 27 30 20']);
