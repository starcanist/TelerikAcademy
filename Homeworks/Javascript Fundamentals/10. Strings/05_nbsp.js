function spacer(args) {
    let str = args[0];
    let replaced = str.split(' ').join('&nbsp;');

    console.log(replaced)
}

spacer(['hello world']);
spacer(['This text contains 4 spaces!!']);
