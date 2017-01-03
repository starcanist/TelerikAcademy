function thirdDigit(array) {

    var num = ((+array / 100) | 0) % 10;

    if (num != 7) {
        console.log("false " + num);
    } else {
        console.log("true");
    }

}

thirdDigit(['5']);
thirdDigit(['701']);
thirdDigit(['9703']);
thirdDigit(['877']);
thirdDigit(['777877']);
thirdDigit(['9999799']);
