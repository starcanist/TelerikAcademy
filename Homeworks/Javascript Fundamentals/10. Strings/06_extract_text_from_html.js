function extractHTML(args) {
    let string = "";
    let array = [];

    for (i in args) {
        string = args[i].replace(/(<([^>]+)>)/g, "").trim();
        array.push(string);
    }

    console.log(array.join(""));
}

extractHTML([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);
