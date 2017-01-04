function isPrime(n) {

    if (n < 2) return false;

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

isPrime(['2']);
isPrime(['23']);
isPrime(['-3']);
isPrime(['0']);
isPrime(['1']);
