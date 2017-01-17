function reverseString(str) {
    var arr = str[0];
    var newString = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        newString += arr[i];
    }
    console.log(newString);
}



reverseString(['sample']);
reverseString(['qwertytrewq']);
