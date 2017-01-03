function sevenAndFive(array) {
    var num = +array[0];
    if (num % 5 == 0 && num % 7 == 0) {
        console.log("true " + num);
    } else {
        console.log("false " + num);
    }

}

sevenAndFive(['3']);
sevenAndFive(['0']);
sevenAndFive(['5']);
sevenAndFive(['7']);
sevenAndFive(['35']);
sevenAndFive(['140']);
