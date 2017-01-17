function selectionSort(items) {
    let len = items.length,
        min,
        temp;

    for (let i = 1; i < len; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            if (+items[j] < +items[min]) {
                min = j;
            }
        }

        if (i != min) {
            temp = items[i];
            items[i] = items[min];
            items[min] = temp;
        }
    }
    items.splice(0, 1);
    console.log(items.join("\n"));
}

selectionSort(['6', '3', '4', '1', '5', '2', '6']);
selectionSort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);
