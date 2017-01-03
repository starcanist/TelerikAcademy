function rectangle(array) {
    var width = +array[0];
    var height = +array[1];
    var area = width * height;
    var perimeter = 2 * (width + height);
    console.log(area.toFixed(2) + " " + perimeter.toFixed(2));

}

rectangle(['2.5', '3']);
rectangle(['5', '5']);
rectangle(['3', '4']);
