function subString(args) {
    let primer = args[0].toLowerCase();
    let sentence = args[1].toLowerCase();
    let reg = new RegExp(primer, 'g')
    let result = (sentence.match(reg)).length;
    console.log(result);
}

subString([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);
