function lastdigitToWord(args) {
    let number = args.toString(),
        lastNumber = +number.slice(-1)[0];

    function toWord(num) {
        switch (num) {
            case 0:
                return "zero"
                break;
            case 1:
                return "one"
                break;
            case 2:
                return "two"
                break;
            case 3:
                return "three"
                break;
            case 4:
                return "four"
                break;
            case 5:
                return "five"
                break;
            case 6:
                return "six"
                break;
            case 7:
                return "seven"
                break;
            case 8:
                return "eight"
                break;
            case 9:
                return "nine"
                break;
            default:
                "not a digit"
        }
    }

    console.log(toWord(lastNumber))
}

lastdigitToWord(['42']);
lastdigitToWord([41]);
lastdigitToWord([23245]);
lastdigitToWord([40]);
