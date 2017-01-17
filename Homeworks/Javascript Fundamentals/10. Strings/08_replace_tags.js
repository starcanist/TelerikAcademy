function replaceTags(args) {
    var str = args[0],
        result = replaceTags(str);

    console.log(result);

    function replaceTags(string) {

        var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;

        return string.replace(regex, function(tag, url, content) {
            return '[' + content + '](' + url + ')';
        });
    }
}

replaceTags(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);
