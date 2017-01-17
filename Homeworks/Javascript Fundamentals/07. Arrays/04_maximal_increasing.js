function maximal(array) {
    let maxCounter = 0;
    let counter = 1;

    for (let i = 1; i < +array[0]; i++) {
        if (+array[i] < +array[i + 1]) {
            counter++;
            if (counter > maxCounter) {
                maxCounter = counter;
            }
        } else {
            counter = 1;
        }
    }

    console.log(maxCounter);

}
