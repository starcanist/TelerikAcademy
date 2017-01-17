function format(args) {
    let obj = JSON.parse(args[0]);
    let str = args[1];

    String.prototype.format = function(obj) {
        let result = this;
        for (i in obj) {
            result = result.replace(new RegExp("#{" + i + "}", "g"), obj[i]);
        }

        return result;
    };

    console.log(str.format(obj));
}

format([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);
format([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);
