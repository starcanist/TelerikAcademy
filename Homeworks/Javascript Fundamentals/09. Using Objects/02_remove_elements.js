function removeElements(args) {

    var target = args[0],
        arr = args.splice(1),
        len = arr.length,
        newArray = [];

    remElement(arr, target);

    printArray(newArray);

    function remElement(array, target) {
        for (var i = 0; i < len; i++) {
            if (target !== array[i]) {
                newArray.push(array[i]);
            }
        }
    }

    function printArray(array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}

removeElements(['1', '2', '3', '2', '1', '2', '3', '2', '1', '1']);
removeElements(['_h/_', '^54F#', 'V', '^54F#', 'Z285', 'kv?tc`', '^54F#', '_h/_', 'Z285', '_h/_', 'kv?tc`', 'Z285', '^54F#', 'Z285', 'Z285', '_h/_', '^54F#', 'kv?tc`', 'kv?tc`', 'Z285']);
