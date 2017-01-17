function binding(args) {
    var obj = JSON.parse(args[0]),
        str = '' + args[1],
        regex = /data-bind-(.*?)="(.*?)"/gi,
        current;

    str = str.replace(/'/, '"');

    while (current = regex.exec(str)) {
        var index = str.indexOf('>');
        if (str[index - 1] === '/') {
            index--;
        }
        var field = current[1];
        if (field.toLowerCase() === 'content') {
            var arr = str.split('');
            var x = arr.splice(index + 1, 0, obj[current[2]]);
            str = arr.join('');
        } else {
            var arr2 = str.split('');
            var x2 = arr2.splice(index, 0, " " + field + '="' + obj[current[2]] + '"');
            str = arr2.join('');
        }
    }

    console.log(str);
}

binding([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);
binding([
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);
