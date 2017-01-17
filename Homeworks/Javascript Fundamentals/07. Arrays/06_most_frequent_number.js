function repeatedNumber(array) {
    if (array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0],
        maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    console.log(maxEl + " (" + maxCount + " times)");
}

repeatedNumber(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
