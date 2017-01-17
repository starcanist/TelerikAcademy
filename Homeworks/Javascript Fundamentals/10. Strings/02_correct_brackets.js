function brackets(args) {
    var string = args[0];
    var re = /\([^()]*\)/g; // Match innermost matching pair.
    // Strip out matching pairs from the inside out.
    while (string.match(re))
        string = string.replace(re, '');
    // If there are any parens left then no good
    if (string.match(/[()]/))
        console.log("Incorrect");
    // Otherwise all parens part of matching pair.
    else {
        console.log("Correct");
    }
}

brackets(['((a+b)/5-d)']);
brackets([')(a+b))']);
